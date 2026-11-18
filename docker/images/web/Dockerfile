ARG PNPM_VERSION="12.21.0"

##########
# BASE
##########
FROM alpine:3.22 AS base

ARG PNPM_VERSION

ENV PNPM_HOME=/opt/pnpm
ENV PATH="${PNPM_HOME}/bin:${PATH}"
# A volume can keep this folder, so the store survives a rebuild
ENV pnpm_config_store_dir=/tmp/.cache/pnpm

WORKDIR /app

# The musl build of Node.js that pnpm downloads needs libgcc and libstdc++
RUN apk add --no-cache curl libgcc libstdc++ && \
    # Install pnpm. pnpm downloads Node.js from devEngines.runtime in package.json.
    # PNPM_NO_MODIFY_PATH skips the shell setup: PATH is set above.
    curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION="${PNPM_VERSION}" PNPM_NO_MODIFY_PATH=1 sh - && \
    # A failed download gives sh an empty script, which exits with 0, so check that pnpm is there.
    pnpm --version


##########
# BUILDER
##########
FROM base AS builder

COPY ../ .

RUN pnpm install && \
    pnpm build


##########
# DEV
##########
FROM base AS dev

ARG DEBIAN_NONINTERACTIVE=1

RUN apk update && \
    apk add --no-cache \
      vim  \
      zsh  \
      tree

COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
