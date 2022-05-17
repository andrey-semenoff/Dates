#!/bin/bash
ROOT=$PWD
printf "\U2753 Please, select package manager your want to use: [\e[4myarn\e[0m, npm]\n"
read pm
if [[ -z $pm ]]
then
    pm="yarn"
elif [ $pm != "npm" ]
then
    printf "\U2757 \"$pm\" is not allowed package manger. Fallback to \"yarn\"\n"
    pm="yarn"
fi
printf "\U2705 You have chosen \"$pm\". Thanks!"

printf "\n\n\U23F3 Server installation...\n\n"
cd $ROOT/server && eval "$pm install"

printf "\n\n\U23F3 App installation...\n\n"
cd $ROOT/app && eval "$pm install"

printf "\n\n\U23F3 App building...\n\n"
cd $ROOT/app && eval "$pm build"

printf "\n\n\U2705 Server & App are successfully installed, build and ready to run!"
printf "\n\n\U1F3C1 To run server & app, please, perform \e[32m\"./start.sh\"\e[0m\n"