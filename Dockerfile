FROM node:10.14-alpine

ARG NODE_MAJOR_VERSION=10
ARG NODE_VERSION=10.14.x
ARG APP_VERSION="0.1.0"

ENV INSTALL_PATH /opt/app
ENV SUMMARY="MDMS Device Provisioning App ${APP_VERSION}"  \
  DESCRIPTION="MDMS Device Provisioning App {APP_VERSION} running node nodejs ${NODE_VERSION} on Alpine Linux"
ENV LC_ALL=en_US.UTF-8 \
  LANG=en_US.UTF-8 

LABEL summary="$SUMMARY" \
  description="$DESCRIPTION"

RUN apk update && \
  apk upgrade && \
  apk add --no-cache bash git openssh

RUN npm i npm@latest expo-cli@latest -g --silent

# Create a home for the application
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

# Install app dependencies
COPY . .

RUN npm i --silent

ENV NODE_PATH $INSTALL_PATH/src

EXPOSE 19000 19001 19002

CMD ["npm", "start"]
