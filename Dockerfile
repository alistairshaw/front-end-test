FROM php:7.1.0-apache
COPY ./provision/config/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN mkdir /provision
ADD provision /provision
RUN . /provision/provision.sh