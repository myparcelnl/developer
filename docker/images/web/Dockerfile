##########
# BASE
##########
FROM node:16-slim AS base

WORKDIR /app

ARG DEBIAN_NONINTERACTIVE=1

RUN apt-get --yes update && \
    apt-get --yes install \
      # Needed for npm dependency vue-template-compiler on ARM \
      build-essential python3 && \
    apt-get --yes clean


##########
# BUILDER
##########
FROM base AS builder

COPY ../ .

RUN yarn install && \
    yarn build


##########
# PROD
##########
FROM nginx:1.21.6-alpine AS prod

COPY --from=builder /app/dist .


##########
# DEV
##########
FROM base AS dev

ARG DEBIAN_NONINTERACTIVE=1

RUN apt-get --yes update && \
    apt-get --yes install vim zsh tree && \
    apt-get --yes clean

COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
