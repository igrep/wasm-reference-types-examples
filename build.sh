#!/bin/bash

set -eu

wat2wasm example1.wat

cargo build --release --target wasm32-unknown-unknown
wasm-bindgen --target web --no-typescript --reference-types ./target/wasm32-unknown-unknown/release/reference_types_examples.wasm --out-dir ./pkg-with-reference-types/
wasm-bindgen --target web --no-typescript ./target/wasm32-unknown-unknown/release/reference_types_examples.wasm --out-dir ./pkg-no-reference-types/
