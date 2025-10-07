#!/bin/bash

PORTFOLIO_DIR="/home/ubuntu/portfolio"
WEB_ROOT="/var/www/tonyxtian.com"

echo "🚀 Starting portfolio deployment..."

cd $PORTFOLIO_DIR

echo "📥 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🎨 Building CSS..."
npm run build

echo "🚢 Deploying to web root..."
sudo rsync -av --delete --exclude='.git' --exclude='node_modules' --exclude='.gitignore' $PORTFOLIO_DIR/ $WEB_ROOT/

echo "🔒 Setting permissions..."
sudo chown -R www-data:www-data $WEB_ROOT
sudo chmod -R 755 $WEB_ROOT

echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment complete! Visit https://tonyxtian.com"