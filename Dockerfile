FROM    centos:centos6
EXPOSE 8080

MAINTAINER Chris Blazek <chris@whatalongstranget.rip>

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

RUN mkdir -p /src
WORKDIR /src


ARG version=unknown
ARG commitsha=unknown
ARG branch=unknown
LABEL version="$version-$commitsha"
LABEL git-commit="$commitsha"
LABEL git-branch="$branch"

ADD . /src/

RUN npm install \
  && rm -rf node_modules \
  && npm install --production \
  && npm version --git-tag-version=false $version-$commitsha \
  && apt-get install git

CMD [ "node", "index.js" ]
