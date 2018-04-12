#!/bin/bash
time for i in {1..10}; do
    seq 10 | parallel -n0 -j5  "curl -H 'Content-Type: application/json' http://localhost:3009/txs -X POST -d '{\"sender\":\"saif\",\"message\":\"hello\"}' -m 2"
    sleep 1
  done