#!/bin/bash
time for i in {1..1000}; do
   curl http://localhost:30090/unconfirmed_txs | jq . 
   sleep 1
  done