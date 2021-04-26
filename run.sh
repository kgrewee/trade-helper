#!/bin/bash

(trap 'kill 0' SIGINT; (exec tradehelper-ui/run.sh) & (exec tradehelper-api/run.sh))


