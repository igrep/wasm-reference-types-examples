use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn get_first_child(elem: web_sys::Node) -> web_sys::Node {
    elem.first_child().unwrap()
}

#[wasm_bindgen]
pub fn append_and_remove(elem: web_sys::Element) {
    let doc = web_sys::window().unwrap().document().unwrap();
    let child = &doc.create_element("br").unwrap();
    elem.append_with_node_1(child).unwrap();
    let _ = elem.remove_child(child).unwrap();
}
