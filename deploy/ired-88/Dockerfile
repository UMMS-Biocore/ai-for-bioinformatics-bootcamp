# Eric Ma's IRED-88 Research Copilot, served read-only with `marimo run`.
#
# Built from the UMMS-Biocore fork rather than the repo's own .devcontainer,
# which is a VS Code development image (Miniconda, TeX Live, Jupyter on 8888)
# and does not start the notebooks. Data are fetched and checksummed at build
# time, so the running container needs no network access of its own.
#
# The build uses HTTPS only (no apt-get, no git): the server's outbound
# HTTP on port 80 is blocked, so Debian's package mirror is unreachable.
#
# Supply chain: everything is pinned. Base images by digest; Eric's code by
# the full commit we reviewed (REF); and every Python package, marimo
# included, by version AND sha256 hash in requirements.txt, installed with
# --require-hashes. Upstream ships no lockfile (its environment is Pixi), so
# requirements.txt is generated here, for that commit:
#   uv pip compile pyproject.toml marimo.in --universal --python-version 3.12 \
#     --generate-hashes --no-header -o requirements.txt   (marimo.in: marimo==0.25.0)
# When the fork moves, review the diff, then update REF and regenerate it.

FROM python:3.12-slim@sha256:dddfd7e07f9d15aeeca61529320492139d21cac7f0070c00609243e51e4e0016

COPY --from=ghcr.io/astral-sh/uv:0.8@sha256:1d31be550ff927957472b2a491dc3de1ea9b5c2d319a9cea5b6a48021e2990a6 /uv /usr/local/bin/uv

RUN useradd --create-home --uid 10001 app
USER app
WORKDIR /home/app

ARG REPO=UMMS-Biocore/ired-88-research-copilot
ARG REF=26e18e6e762547bd87525c7b232a4d5050bb5b95

# Download the source as a tarball over HTTPS. notebooks/live/ holds Eric's
# empty skeletons for building the analysis on stage; in a read-only viewer
# they would only show blank pages, so they are dropped.
RUN python -c "import io, os, shutil, sys, tarfile, urllib.request; \
url = 'https://codeload.github.com/' + sys.argv[1] + '/tar.gz/' + sys.argv[2]; \
tarfile.open(fileobj=io.BytesIO(urllib.request.urlopen(url).read()), mode='r:gz').extractall('.', filter='data'); \
top = [d for d in os.listdir('.') if d.startswith('ired-88-research-copilot-')][0]; \
os.rename(top, 'demo'); \
shutil.rmtree('demo/notebooks/live', ignore_errors=True)" "$REPO" "$REF"

WORKDIR /home/app/demo
# No UV_COMPILE_BYTECODE: on the 128-core server, compiling site-packages in
# parallel runs out of file descriptors inside the build. Capping concurrency
# keeps installs within the build's limits too.
ENV UV_LINK_MODE=copy UV_CONCURRENT_INSTALLS=4
COPY --chown=app requirements.txt /home/app/requirements.txt
RUN uv venv --quiet .venv \
    && uv pip install --quiet --require-hashes -r /home/app/requirements.txt \
    && uv pip install --quiet --no-deps . \
    && .venv/bin/python scripts/fetch_data.py

# The page is served under this prefix by Apache, so marimo must know it.
ENV BASE_URL=/ired-88/live
EXPOSE 8080

# marimo run: viewers see code and results and can use the widgets, but
# cannot edit or run their own code.
CMD ["sh", "-c", "exec .venv/bin/marimo run notebooks/ --host 0.0.0.0 --port 8080 --headless --include-code --base-url \"$BASE_URL\""]
