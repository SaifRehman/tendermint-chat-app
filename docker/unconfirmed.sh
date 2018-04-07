#!/bin/bash
time for i in {1..1000}; do
   curl http://localhost:46657/unconfirmed_txs | json_pp 
   sleep 1
  done