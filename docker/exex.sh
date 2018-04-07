#!/bin/bash
time for i in {1..1000}; do
    seq 1000 | parallel -n0 -j40  "curl -H 'Content-Type: application/json' http://localhost:3002/txs -X POST -d '{\"sender\":\"saif\",\"message\":\"hello\"}' -m 2"
  done