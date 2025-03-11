# Etape 1 : compilation du projet
FROM node:20-alpine AS builder
# paramétrage du dossier courant pour le build
WORKDIR /cactus-front
COPY . .
# suppression du contenu de nodes_modules
RUN rm -rf node_modules
# npm ci similaire à npm install (mais environnement automatisé) -> installation de tous les packages nécessaires au build
RUN npm ci
RUN npm run build

# Etape 2 : utilisation d'une image de serveur http pour servir le site précompilé
FROM nginx:1.25.1-alpine
EXPOSE 80
COPY --chown=nginx:nginx nginx-ui.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /cactus-front/dist /var/www/html/
