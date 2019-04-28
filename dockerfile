FROM node
ARG profile
ENV NPM_CONFIG_LOGLEVEL warn
COPY . .
RUN npm install gulp -g
RUN npm install
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build
EXPOSE 3000