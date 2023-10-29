/* const tagsContainer = document.querySelector('.js-tags');
let seclectTag = null;

console.log(tagsContainer);

tagsContainer.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveBtn = document.querySelector('.primary')
  
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('primary')
  }
  // console.log(evt.target);
  const nextActive = evt.target;
  nextActive.classList.add('primary')
  seclectTag = nextActive.dataset.value;
    console.log(seclectTag);
}
 */
 
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const isActive = btn.classList.contains('primary');

  if (isActive) {
    selectedTags.delete(btn.dataset.value);
  } else {
    selectedTags.add(btn.dataset.value);
  }
  btn.classList.toggle('primary')

  
  console.log(selectedTags)
}