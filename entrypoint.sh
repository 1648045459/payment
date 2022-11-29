#!/bin/bash
###
 # @Author: your name
 # @Date: 2020-11-23 18:01:50
 # @LastEditTime: 2022-11-23 15:38:59
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \beehub-mobile-v3d:\Project\chain-wallet\entrypoint.sh
### 

# replace the frented params
sed -i "s|BASEURL[[:space:]]*=.*|BASEURL='$BASEURL'|g" /usr/share/nginx/html/conf.js

# run nginx
exec /usr/sbin/nginx -g "daemon off;"

