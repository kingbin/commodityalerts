#FROM   node:latest
FROM node:argon
EXPOSE 8080

MAINTAINER Chris Blazek <chris@whatalongstranget.rip>

# Create app directory
RUN mkdir -p /usr/src/commodityalerts
WORKDIR /usr/src/commodityalerts


ARG version=unknown
ARG commitsha=unknown
ARG branch=unknown
LABEL version="$version-$commitsha"
LABEL git-commit="$commitsha"
LABEL git-branch="$branch"

ADD . /usr/src/commodityalerts

# Install app dependencies
RUN npm install \
#  && rm -rf node_modules \
#  && npm install --production \
  && apt-get install git

CMD [ "npm", "start" ]
#CMD [ "node", "index.js" ]
