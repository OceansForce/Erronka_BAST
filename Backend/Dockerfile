# Usar una imagen oficial de PHP
FROM php:8.1-fpm

# Establecer el directorio de trabajo
WORKDIR /var/www

# Copiar los archivos del proyecto al contenedor
COPY . /var/www

# Instalar las dependencias del sistema necesarias para Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev libzip-dev \
    unzip git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Limpiar caché y luego instalar las dependencias de PHP para Laravel con más logs
RUN composer clear-cache && composer install --verbose

# Exponer el puerto 9000
EXPOSE 9000

# Iniciar PHP-FPM
CMD ["php-fpm"]
