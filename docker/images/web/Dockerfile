ARG NODE_VERSION=18

##########
# BASE
##########
FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /app

RUN yarn config set --home enableTelemetry 0 && \
    yarn config set enableGlobalCache true && \
    yarn config set globalFolder /tmp/.cache/yarn


##########
# BUILDER
##########
FROM base AS builder

COPY ../ .

RUN yarn install && \
    yarn build


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
