#!/bin/bash
#
# Testing routes

# GET
curl --get http://localhost:1234/test/get --data-urlencode "fn=Милош" --data-urlencode "ln=Милановић"
echo ""
echo ""

# POST - application/x-www-form-urlencoded
curl http://localhost:1234/test/post --data-urlencode "fn=Милош" --data-urlencode "ln=Милановић"
echo ""
echo ""

# POST - application/json
curl http://localhost:1234/test/post/json --header "Content-Type: application/json" --data '{"fn":"Милош","ln":"Милановић"}'
echo ""
echo ""

# GET - params
curl http://localhost:1234/test/params/user/mmilanovic
echo ""
echo ""

# HTTP cookie
curl http://localhost:1234/test/cookies --cookie "user=mmilanovic"
echo ""
echo ""
