#!/bin/bash

function local()
{
    docker-compose -f docker-compose.local.yml up --build
}

function dev()
{
    docker-compose -f docker-compose.dev.yml up -d --build
}

function prod()
{
    docker-compose -f docker-compose.prod.yml up -d --build
}


echo "Docker Run"
echo
PS3="Please select which option > "
options=("Local" "Dev" "Prod" "Quit")
select yn in "${options[@]}"; do
    case $yn in
        "Local" )        local; break;;
        "Dev" )  dev; break;;
        "Prod" )   prod; break;;
        "Quit" ) exit;;
    esac
done