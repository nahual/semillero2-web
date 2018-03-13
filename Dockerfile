FROM node:9


USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global


WORKDIR /semillero2-web
RUN npm install -g @angular/cli
RUN npm install -g raml2html

ENV PATH="$PATH:$NPM_CONFIG_PREFIX/bin"

EXPOSE 4200
