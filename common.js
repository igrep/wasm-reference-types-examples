export async function mainWith(description, init, { get_first_child, append_and_remove}) {
  document.getElementById('app').innerHTML = `
  <div class="target">Example - ${description}</div>
  `;

  await init();

  const target = document.querySelector('#app .target');
  console.log(get_first_child(target).nodeValue);

  const label = `append_and_remove - ${description}`;
  console.time(label);
  for (let i = 0; i < 1_000_000; ++i) {
    append_and_remove(target);
  }
  console.timeEnd(label);
}
