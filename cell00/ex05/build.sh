#!/bin/bash
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for tx in "$@"; do
    mkdir -p "ex$tx" 
  done
fi

