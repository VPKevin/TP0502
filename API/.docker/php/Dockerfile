FROM php:8.1.0-fpm-alpine

RUN apk update; \
    apk upgrade;

RUN apk add git gmp gmp-dev unzip zip nodejs yarn lsof

RUN docker-php-ext-install mysqli pdo pdo_mysql gmp opcache

RUN curl -sSk https://getcomposer.org/installer | php -- --version=2.1.3 --disable-tls && \
    mv composer.phar /usr/local/bin/composer

# RUN yarn build

# RUN composer install
