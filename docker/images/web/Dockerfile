FROM node:16-slim AS base

WORKDIR /app


FROM base AS prod

COPY ../ .

RUN yarn install && \
    yarn build


FROM base AS dev

RUN apt-get --yes update && apt-get --yes install vim zsh tree

COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
