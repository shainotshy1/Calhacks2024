#!/bin/bash
python -u run.py \
    --test_file ./data/tasks_test.jsonl \
    --api_key YOUR_OPENAI_API_KEY \
    --headless \
    --max_iter 15 \read
    --max_attached_imgs 3 \
    --temperature 1 \
    --fix_box_color \
    --seed 42