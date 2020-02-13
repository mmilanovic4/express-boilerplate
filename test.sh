#!/bin/bash
#
# Testing routes

# GET
curl --get http://localhost:1234/api/get --data-urlencode "fn=Милош" --data-urlencode "ln=Милановић"
echo ""
echo ""

# REST-style URL
curl http://localhost:1234/api/user/mmilanovic
echo ""
echo ""

# POST [application/x-www-form-urlencoded]
curl http://localhost:1234/api/post --data-urlencode "fn=Милош" --data-urlencode "ln=Милановић"
echo ""
echo ""

# POST [application/json]
curl http://localhost:1234/api/post --header "Content-Type: application/json" --data '{"fn":"Милош","ln":"Милановић"}'
echo ""
echo ""

# HTTP cookie
curl http://localhost:1234/api/cookies --cookie "user=mmilanovic"
echo ""
echo ""
