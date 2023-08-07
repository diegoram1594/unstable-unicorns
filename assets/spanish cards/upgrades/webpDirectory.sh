#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
for file in *
do
    if [[ "${file}" == *.png ]]; then
        echo "${file%.*}"
        cwebp "${file}" -o "${file%.*}".webp
    fi
done
IFS=$SAVEIFS