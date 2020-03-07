root=`pwd`

echo "compile front"
cd src/front/
yarn install
yarn webpack
cd $root

echo $root

echo "start server"
cd src/server/
sudo docker build -t best_hack_server .
sudo docker run -p 80:80  best_hack_server
cd $root
