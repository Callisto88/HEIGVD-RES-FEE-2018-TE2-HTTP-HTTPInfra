#!/bin/bash

URL=http://localhost

for i in {1..1000}
do
	curl "$URL" &
done

wait
