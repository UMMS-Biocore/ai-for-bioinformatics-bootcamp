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
# Build a specific commit with --build-arg REF=<sha>; the default is main.

FROM python:3.12-slim

COPY --from=ghcr.io/astral-sh/uv:0.8 /uv /usr/local/bin/uv

RUN useradd --create-home --uid 10001 app
USER app
WORKDIR /home/app

ARG REPO=UMMS-Biocore/ired-88-research-copilot
ARG REF=main
ARG MARIMO_VERSION=0.25.0

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
ENV UV_LINK_MODE=copy UV_COMPILE_BYTECODE=1
RUN uv sync --frozen --no-dev \
    && uv pip install --quiet "marimo==${MARIMO_VERSION}" \
    && uv run --no-sync python scripts/fetch_data.py

# The page is served under this prefix by Apache, so marimo must know it.
ENV BASE_URL=/ired-88/live
EXPOSE 8080

# marimo run: viewers see code and results and can use the widgets, but
# cannot edit or run their own code.
CMD ["sh", "-c", "exec .venv/bin/marimo run notebooks/ --host 0.0.0.0 --port 8080 --headless --include-code --base-url \"$BASE_URL\""]
