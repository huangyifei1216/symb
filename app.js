const source = document.querySelector('#sourceText');
const titleInput = document.querySelector('#titleText');
const brandInput = document.querySelector('#brandText');
const charCount = document.querySelector('#charCount');
const generateBtn = document.querySelector('#generateBtn');
const generateLabel = document.querySelector('#generateLabel');
const engineStatus = document.querySelector('#engineStatus');
const toast = document.querySelector('#toast');
const imageUpload = document.querySelector('#imageUpload');
const dropzone = document.querySelector('#dropzone');
const uploadedList = document.querySelector('#uploadedList');
const imageCount = document.querySelector('#imageCount');
const ocrStatus = document.querySelector('#ocrStatus');
const pageStrip = document.querySelector('#pageStrip');
const previousPageButton = document.querySelector('#previousPage');
const nextPageButton = document.querySelector('#nextPage');
const pageCounter = document.querySelector('#pageCounter');
const exportHint = document.querySelector('#exportHint');
const downloadButtons = [...document.querySelectorAll('.download-button')];
const noteCard = document.querySelector('#noteCard');
const copyCurrentCardButton = document.querySelector('#copyCurrentCard');
const downloadCurrentCardButton = document.querySelector('#downloadCurrentCard');
const illustrationLibraryElement = document.querySelector('#illustrationLibrary');
const autoMatchIllustrationButton = document.querySelector('#autoMatchIllustration');
const manualUploadIllustrationButton = document.querySelector('#manualUploadIllustration');
const reviewPanel = document.querySelector('#reviewPanel');
const reviewEditor = document.querySelector('#reviewEditor');
const controls = {
  coverHeight: document.querySelector('#coverHeightRange'),
  imageScale: document.querySelector('#imageScaleRange'),
  imageFit: document.querySelector('#imageFitSelect'),
  bodyFont: document.querySelector('#bodyFontRange'),
  lineHeight: document.querySelector('#lineHeightRange'),
  coverTitle: document.querySelector('#coverTitleRange'),
  coverHeightValue: document.querySelector('#coverHeightValue'),
  imageScaleValue: document.querySelector('#imageScaleValue'),
  bodyFontValue: document.querySelector('#bodyFontValue'),
  lineHeightValue: document.querySelector('#lineHeightValue'),
  coverTitleValue: document.querySelector('#coverTitleValue'),
};

const preview = {
  quotePage: document.querySelector('#quotePage'),
  articlePage: document.querySelector('#articlePage'),
  visual: document.querySelector('#previewVisual'),
  quoteEnglish: document.querySelector('#previewQuoteEnglish'),
  quoteChinese: document.querySelector('#previewQuoteChinese'),
  quoteBulletEn: document.querySelector('#previewQuoteBulletEn'),
  quoteBulletZh: document.querySelector('#previewQuoteBulletZh'),
  articleTitle: document.querySelector('#previewArticleTitle'),
  articleColumns: document.querySelector('#articleColumns'),
  brandBadge: document.querySelector('#previewBrandBadge'),
  brandFooter: document.querySelector('#previewBrandFooter'),
};

const illustrationLibrary = [
  { id: 'flat-homework', label: '作业启动', style: 'flat', src: '/illustrations/flat-homework-stairs.jpg', keywords: ['作业', '磨蹭', '拖延', '启动', '学习', '专注'] },
  { id: 'flat-emotion', label: '情绪安全', style: 'flat', src: '/illustrations/flat-emotional-safety.jpg', keywords: ['情绪', '安全感', '哭', '发脾气', '共情', '焦虑'] },
  { id: 'flat-screen', label: '屏幕选择', style: 'flat', src: '/illustrations/flat-screen-choice.jpg', keywords: ['手机', '屏幕', '游戏', '电子', '网络', '选择'] },
  { id: 'flat-independence', label: '走向独立', style: 'flat', src: '/illustrations/flat-independence-flight.jpg', keywords: ['独立', '放手', '自主', '勇气', '成长', '责任'] },
  { id: 'flat-peer', label: '同伴归属', style: 'flat', src: '/illustrations/flat-peer-belonging.jpg', keywords: ['同伴', '朋友', '社交', '归属', '校园', '关系'] },
  { id: 'flat-repair', label: '关系修复', style: 'flat', src: '/illustrations/flat-parent-repair.jpg', keywords: ['修复', '道歉', '冲突', '吼叫', '关系', '沟通'] },
  { id: 'classic-learning', label: '亲子共读', style: 'classic', src: '/illustrations/parent-child-learning.jpg', keywords: ['阅读', '读书', '陪伴', '学习'] },
  { id: 'classic-growth', label: '成长与清晰', style: 'classic', src: '/illustrations/growth-clarity.jpg', keywords: ['成长', '目标', '清晰', '方向'] },
  { id: 'classic-homework', label: '翻越作业山', style: 'classic', src: '/illustrations/homework-start.jpg', keywords: ['作业', '困难', '坚持'] },
  { id: 'classic-coregulation', label: '共同调节', style: 'classic', src: '/illustrations/emotional-coregulation.jpg', keywords: ['情绪', '调节', '陪伴'] },
  { id: 'classic-screen', label: '走出屏幕', style: 'classic', src: '/illustrations/screen-time.jpg', keywords: ['屏幕', '手机', '户外'] },
  { id: 'classic-independence', label: '独立起飞', style: 'classic', src: '/illustrations/independence.jpg', keywords: ['独立', '自主', '放手'] },
  { id: 'classic-peer', label: '同伴连接', style: 'classic', src: '/illustrations/peer-belonging.jpg', keywords: ['社交', '同伴', '朋友'] },
  { id: 'classic-repair', label: '金缮修复', style: 'classic', src: '/illustrations/parent-repair.jpg', keywords: ['道歉', '修复', '关系'] },
  { id: 'classic-social', label: '社会连接', style: 'classic', src: '/illustrations/social-connection.jpg', keywords: ['社交', '连接', '群体'] },
];

const localTranslations = [
  [/真正的自由，不是拥有更多选择，而是越来越清楚自己不想要什么。/g, 'Real freedom is not having more choices. It is knowing, with growing clarity, what you do not want.'],
  [/把生活过成自己喜欢的样子，需要一点勇气，也需要一点耐心。/g, 'Living a life you love takes a little courage and a little patience.'],
  [/不要害怕走得慢，重要的是不要停下来。/g, 'Do not be afraid of moving slowly. The important thing is to keep moving.'],
  [/每一个微小的行动，都在把你带向更喜欢的自己。/g, 'Every small action is carrying you toward a version of yourself you like more.'],
  [/真正厉害的人，往往不急着证明自己。/g, 'The people with the deepest strength rarely rush to prove themselves.'],
  [/他们把时间花在长期主义上，也把安静变成一种力量。/g, 'They invest their time in the long term and turn quietness into a kind of strength.'],
  [/慢一点，也没有关系。/g, 'It is okay to move a little more slowly.'],
  [/你不需要一次就把所有事情都做好。/g, 'You do not have to get everything right at once.'],
  [/重要的是，开始行动。/g, 'What matters is that you begin.'],
];

const wordMap = new Map([
  ['自由', 'freedom'], ['选择', 'choices'], ['生活', 'life'], ['喜欢', 'love'], ['勇气', 'courage'], ['耐心', 'patience'], ['成长', 'growth'], ['行动', 'action'], ['时间', 'time'], ['自己', 'yourself'], ['世界', 'world'], ['力量', 'strength'], ['相信', 'believe'], ['不要', 'do not'], ['害怕', 'be afraid'], ['重要', 'important'], ['清楚', 'clear'], ['安静', 'quiet'], ['美好', 'beautiful'], ['今天', 'today'], ['慢', 'slow'], ['努力', 'effort'], ['成为', 'become'], ['更好', 'better'], ['因为', 'because'], ['所以', 'so'], ['但是', 'but'], ['需要', 'need'], ['拥有', 'have'], ['知道', 'know'], ['给', 'give'], ['让', 'let'], ['当', 'when'], ['如果', 'if'], ['不是', 'not'], ['越来越', 'increasingly'], ['一点', 'a little'], ['每一个', 'every'], ['真正', 'real'], ['的人', 'people'],
]);

const state = {
  images: [],
  pages: [],
  currentPage: 0,
  document: null,
  artFilter: 'flat',
  coverMode: 'library',
  libraryImage: null,
  settings: { coverHeight: 39, imageScale: 100, imageFit: 'cover', bodyFont: 14.5, lineHeight: 1.45, coverTitle: 42 },
};
let liveTimer;
let liveRequestId = 0;
let liveAbortController;
const defaultPreview = { chinese: preview.quoteChinese.textContent, english: preview.quoteEnglish.textContent };
let liveEnglish = defaultPreview.english;
let liveTitleEnglish = '';

function updateCount() { charCount.textContent = `${source.value.length} / ${source.maxLength}`; }
function brandName() { return brandInput.value.trim() || '斯坦福外刊'; }
function applyBrand() {
  const brand = brandName();
  preview.brandBadge.textContent = brand;
  preview.brandFooter.textContent = `@${brand}`;
  document.querySelector('.breadcrumbs strong').textContent = `${brand}精选模板`;
}
function illustrationItem(item) {
  return { ...item, url: item.src, name: item.label, translateX: 0, translateY: 0 };
}
function currentCoverImage() {
  if (state.coverMode === 'upload' && state.images[0]) return state.images[0];
  return state.libraryImage;
}
function matchIllustration(text = `${titleInput.value}\n${source.value}`) {
  const normalized = text.toLowerCase();
  let best = illustrationLibrary.find((item) => item.id === 'flat-emotion');
  let bestScore = -1;
  illustrationLibrary.filter((item) => item.style === 'flat').forEach((item) => {
    const score = item.keywords.reduce((sum, keyword) => sum + (normalized.includes(keyword.toLowerCase()) ? 1 : 0), 0);
    if (score > bestScore) { best = item; bestScore = score; }
  });
  return best;
}
function selectIllustration(item, { announce = true } = {}) {
  state.libraryImage = illustrationItem(item);
  state.coverMode = 'library';
  renderIllustrationLibrary();
  if (state.pages.length && state.document) {
    const documentState = state.document;
    state.pages = makePages(documentState.manualText, documentState.titleChinese, documentState.titleEnglish, documentState.english, documentState.imageTexts, documentState.translationSource);
    state.currentPage = Math.min(state.currentPage, state.pages.length - 1);
    renderPageStrip(); renderReviewEditor(); renderPreview(state.pages[state.currentPage], state.currentPage);
  }
  else renderLivePreview(liveEnglish, liveTitleEnglish);
  if (announce) showToast(`已选用「${item.label}」插画，可在右侧拖动取景`);
}
function renderIllustrationLibrary() {
  if (!illustrationLibraryElement) return;
  illustrationLibraryElement.innerHTML = '';
  illustrationLibrary.filter((item) => state.artFilter === 'all' || item.style === state.artFilter).forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `illustration-choice${state.libraryImage?.id === item.id && state.coverMode === 'library' ? ' active' : ''}`;
    button.innerHTML = `<img src="${item.src}" alt="" loading="lazy"><span>${item.label}</span>`;
    button.addEventListener('click', () => selectIllustration(item));
    illustrationLibraryElement.appendChild(button);
  });
}
function autoMatchIllustration() {
  const item = matchIllustration();
  selectIllustration(item, { announce: false });
  showToast(`已根据主题匹配「${item.label}」`);
}
function localTranslate(text) {
  let result = text.trim();
  for (const [pattern, translation] of localTranslations) result = result.replace(pattern, translation);
  if (/[\u4e00-\u9fff]/.test(result)) {
    const parts = result.split(/([，。！？、；：\n,.!?;:])/);
    result = parts.map((part) => {
      if (/^[，。！？、；：\n,.!?;:]+$/.test(part)) return part;
      let translated = part;
      [...wordMap.entries()].sort((a, b) => b[0].length - a[0].length).forEach(([zh, en]) => { translated = translated.replaceAll(zh, ` ${en} `); });
      return translated.replace(/\s+/g, ' ').trim();
    }).join('').replace(/\s+([,.!?;:，。！？、；：])/g, '$1');
  }
  return result || 'A small note about becoming more honest with yourself.';
}

async function remoteTranslate(text, externalSignal) {
  const controller = new AbortController();
  const abortExternal = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort();
    else externalSignal.addEventListener('abort', abortExternal, { once: true });
  }
  const timer = setTimeout(() => controller.abort(), 16000);
  try {
    const query = encodeURIComponent(text);
    const googleRequest = fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q=${query}`, { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('google translation unavailable'); return response.json(); })
      .then((data) => Array.isArray(data?.[0]) ? data[0].map((item) => item?.[0] || '').join('').trim() : '')
      .then(validateTranslation);
    const memoryRequest = fetch(`https://api.mymemory.translated.net/get?q=${query}&langpair=zh-CN|en`, { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('backup translation unavailable'); return response.json(); })
      .then((data) => data?.responseData?.translatedText?.trim() || '')
      .then(validateTranslation);
    const translated = await Promise.any([googleRequest, memoryRequest]);
    controller.abort();
    return translated;
  } finally {
    clearTimeout(timer);
    externalSignal?.removeEventListener('abort', abortExternal);
  }
}

function validateTranslation(translated) {
  const clean = String(translated || '').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  if (!clean || /(QUERY\s+LENGTH|LIMIT\s+EXCEEDED|MAX(?:IMUM)?\s+ALLOWED|INVALID\s+QUERY|MYMEMORY\s+WARNING|PLEASE\s+REDUCE)/i.test(clean)) throw new Error('invalid translation response');
  return clean;
}

async function translateLongText(text) {
  const chunks = translationUnits(text);
  if (chunks.length <= 1) return remoteTranslate(chunks[0] || text);
  const translated = [];
  for (let index = 0; index < chunks.length; index += 4) {
    const batch = chunks.slice(index, index + 4);
    translated.push(...await Promise.all(batch.map((chunk) => remoteTranslate(chunk))));
  }
  return translated.join('\n');
}

function productionText(text, maxLength = 1200) {
  const clean = text.replace(/\r/g, '').trim();
  if (clean.length <= maxLength) return { text: clean, shortened: false };
  const slice = clean.slice(0, maxLength);
  const boundary = Math.max(slice.lastIndexOf('\n'), slice.lastIndexOf('。'), slice.lastIndexOf('！'), slice.lastIndexOf('？'), slice.lastIndexOf('；'));
  const safeEnd = boundary >= Math.floor(maxLength * .72) ? boundary + 1 : maxLength;
  return { text: slice.slice(0, safeEnd).trim(), shortened: true };
}

function shortTitle(text) { const clean = text.replace(/\s+/g, ' ').trim(); return clean.length > 28 ? `${clean.slice(0, 28)}…` : clean; }
function headline(text, maxLength = 46) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  const sliced = clean.slice(0, maxLength);
  return /\s/.test(sliced) ? sliced.replace(/\s+\S*$/, '').trim() : sliced;
}
function firstSentence(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  const withoutListNumber = clean.replace(/^\d+[.)、]\s*/, '');
  return withoutListNumber.split(/(?<=[.!?])\s+/)[0] || withoutListNumber || clean;
}
function quoteChineseTitle(text) {
  const first = text.replace(/\s+/g, ' ').trim().split(/[。！？]/)[0] || text.trim();
  const withoutSection = first.replace(/^(?:第[一二三四五六七八九十百\d]+部分|\d+)[：:、.)]?\s*/, '');
  return headline(withoutSection.split(/[，,；;]/)[0] || withoutSection, 24);
}
function quoteEnglishTitle(text) {
  const first = firstSentence(text).replace(/^Part\s+(?:\d+|[A-Za-z]+)\s*:\s*/i, '');
  return headline(first.split(/[,;—–]/)[0] || first, 64);
}
function splitArticleBlocks(text, count = 12) {
  const clean = text.trim(); if (!clean) return [];
  const paragraphs = clean.split(/\n+/).map((item) => item.trim()).filter(Boolean);
  if (paragraphs.length > 1) return paragraphs.slice(0, count);
  const units = clean.split(/(?<=[.!?。！？])\s*/).filter(Boolean); const target = Math.max(42, Math.ceil(clean.length / count)); const blocks = []; let current = '';
  units.forEach((unit) => { if (current && current.length + unit.length > target && blocks.length < count - 1) { blocks.push(current.trim()); current = ''; } current = current ? `${current} ${unit}` : unit; });
  if (current) blocks.push(current.trim()); return blocks.slice(0, count);
}
function renderArticleRows(english, chinese) {
  preview.articleColumns.innerHTML = '';
  const englishBlocks = splitArticleBlocks(english);
  const chineseBlocks = splitArticleBlocks(chinese);
  const count = Math.max(englishBlocks.length, chineseBlocks.length, 1);
  for (let index = 0; index < count; index += 1) {
    const row = document.createElement('div');
    row.className = 'article-row';
    const englishParagraph = document.createElement('p');
    englishParagraph.className = 'preview-block';
    englishParagraph.textContent = englishBlocks[index] || '';
    const chineseParagraph = document.createElement('p');
    chineseParagraph.className = 'preview-block';
    chineseParagraph.textContent = chineseBlocks[index] || '';
    row.append(englishParagraph, chineseParagraph);
    preview.articleColumns.appendChild(row);
  }
}
function bulletText(text, fallback, maxLength) {
  const clean = text.replace(/\s+/g, ' ').trim() || fallback;
  if (clean.length <= maxLength) return `• ${clean}`;
  const slice = clean.slice(0, maxLength);
  const sentenceEnd = Math.max(slice.lastIndexOf('.'), slice.lastIndexOf('。'), slice.lastIndexOf('!'), slice.lastIndexOf('！'), slice.lastIndexOf('?'), slice.lastIndexOf('？'), slice.lastIndexOf(';'), slice.lastIndexOf('；'));
  const wordEnd = slice.lastIndexOf(' ');
  const safeEnd = sentenceEnd >= Math.floor(maxLength * .55) ? sentenceEnd + 1 : wordEnd >= Math.floor(maxLength * .7) ? wordEnd : maxLength;
  return `• ${slice.slice(0, safeEnd).trim()}`;
}
function getTakeaway(english, tone) {
  if (tone === 'clear') return 'Clarity makes the next step easier.';
  if (tone === 'literary') return 'A quieter life can still hold a very bright light.';
  const first = english.split(/[.!?]/)[0].trim(); return first.length < 55 ? `${first}.` : 'Clarity is a quieter kind of freedom.';
}
function createLead(english) { const words = english.split(/\s+/).filter(Boolean); return words.length < 9 ? 'A little note for the days when you need to remember what matters.' : `A little note for the days when you need to remember that ${words.slice(0, 9).join(' ').toLowerCase()}…`; }
function setStatus(text, isWorking = false) { engineStatus.textContent = `${isWorking ? '◌' : '✦'} ${text}`; }
function showToast(text) { toast.textContent = text; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); }
function setOcrStatus(text, working = false) { ocrStatus.innerHTML = `<i class="${working ? 'working' : ''}"></i>${text}`; }
function setDownloadsEnabled(enabled) {
  downloadButtons.forEach((button) => { button.disabled = !enabled; });
  copyCurrentCardButton.disabled = !enabled;
  downloadCurrentCardButton.disabled = !enabled;
}
function invalidateGeneratedPages() {
  state.pages = [];
  state.currentPage = 0;
  state.document = null;
  renderPageStrip();
  renderReviewEditor();
  setDownloadsEnabled(false);
}

function updatePageNavigation() {
  const total = state.pages.length;
  const current = total ? Math.min(state.currentPage + 1, total) : 0;
  pageCounter.textContent = `${current} / ${total}`;
  previousPageButton.disabled = !total || current <= 1;
  nextPageButton.disabled = !total || current >= total;
}

function imagePosition(item) {
  return {
    x: Number.isFinite(item?.translateX) ? item.translateX : 0,
    y: Number.isFinite(item?.translateY) ? item.translateY : 0,
  };
}

function rangeProgress(input) {
  return ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
}

function applyControlStyles() {
  Object.values(controls).filter((control) => control?.type === 'range').forEach((input) => input.style.setProperty('--range-progress', `${rangeProgress(input)}%`));
}

function applyDesignSettings({ rerender = true, repaginate = false } = {}) {
  state.settings.coverHeight = Number(controls.coverHeight.value);
  state.settings.imageScale = Number(controls.imageScale.value);
  state.settings.imageFit = controls.imageFit.value;
  state.settings.bodyFont = Number(controls.bodyFont.value);
  state.settings.lineHeight = Number(controls.lineHeight.value);
  state.settings.coverTitle = Number(controls.coverTitle.value);
  controls.coverHeightValue.textContent = `${state.settings.coverHeight}%`;
  controls.imageScaleValue.textContent = `${state.settings.imageScale}%`;
  controls.bodyFontValue.textContent = `${state.settings.bodyFont.toFixed(1)}px`;
  controls.lineHeightValue.textContent = state.settings.lineHeight.toFixed(2);
  controls.coverTitleValue.textContent = `${state.settings.coverTitle}px`;
  applyControlStyles();
  const quoteScale = Math.max(.55, Math.min(1, (100 - state.settings.coverHeight) / 61));
  noteCard.style.setProperty('--quote-image-height', `${state.settings.coverHeight}%`);
  noteCard.style.setProperty('--quote-scale', quoteScale.toFixed(3));
  noteCard.style.setProperty('--body-font-cqw', `${(state.settings.bodyFont / 6.2).toFixed(3)}cqw`);
  noteCard.style.setProperty('--body-line-height', state.settings.lineHeight.toFixed(2));
  noteCard.style.setProperty('--quote-en-margin', `${(3.3 * quoteScale).toFixed(2)}%`);
  noteCard.style.setProperty('--quote-zh-margin', `${(5.2 * quoteScale).toFixed(2)}%`);
  noteCard.style.setProperty('--quote-bullet-margin', `${(6.5 * quoteScale).toFixed(2)}%`);
  noteCard.style.setProperty('--quote-en-size', `${(5.15 * quoteScale).toFixed(3)}cqw`);
  noteCard.style.setProperty('--quote-zh-size', `${state.settings.coverTitle.toFixed(1)}px`);
  noteCard.style.setProperty('--quote-body-size', `${(state.settings.bodyFont / 6.2 * quoteScale).toFixed(3)}cqw`);
  if (repaginate && state.document) {
    const documentState = state.document;
    state.pages = makePages(documentState.manualText, documentState.titleChinese, documentState.titleEnglish, documentState.english, documentState.imageTexts, documentState.translationSource);
    state.currentPage = Math.min(state.currentPage, state.pages.length - 1);
    renderPageStrip();
    renderReviewEditor();
  }
  if (!rerender) return;
  if (state.pages.length) renderPreview(state.pages[state.currentPage], state.currentPage);
  else renderLivePreview(liveEnglish, liveTitleEnglish);
}

function syncImagesToGeneratedPages() {
  state.pages.forEach((page) => { page.image = page.role === 'cover' ? currentCoverImage() : null; });
  if (state.document) state.document.imageTexts = [...state.images];
}

function keepGeneratedPagesAfterImageChange() {
  if (!state.pages.length || !source.value.trim()) return false;
  syncImagesToGeneratedPages();
  state.currentPage = Math.min(state.currentPage, state.pages.length - 1);
  renderPageStrip();
  renderPreview(state.pages[state.currentPage], state.currentPage);
  return true;
}

function renderUploadedImages() {
  imageCount.textContent = `${state.images.length} / 1`; uploadedList.innerHTML = '';
  state.images.forEach((item, index) => {
    const chip = document.createElement('div'); chip.className = 'image-chip';
    chip.innerHTML = `<img src="${item.url}" alt="${item.name}" /><span><b>${item.name}</b><small>${item.ocrText ? '已识别中文' : '等待识别'}</small></span><button type="button" aria-label="移除 ${item.name}">×</button>`;
    chip.querySelector('button').addEventListener('click', () => {
      URL.revokeObjectURL(item.url);
      state.images.splice(index, 1);
      if (!state.images.length) state.coverMode = 'library';
      const keptPages = keepGeneratedPagesAfterImageChange();
      renderUploadedImages();
      if (!keptPages) { invalidateGeneratedPages(); renderLivePreview(liveEnglish); }
      setOcrStatus('图片已移除；已有文字分页保持不变');
    });
    uploadedList.appendChild(chip);
  });
  dropzone.classList.toggle('has-images', state.images.length > 0);
}
function addImages(files) {
  const file = [...files].find((item) => item.type.startsWith('image/'));
  if (!file) { showToast('请选择 JPG、PNG 或 WEBP 图片'); return; }
  state.images.forEach((item) => URL.revokeObjectURL(item.url));
  state.images = [{ file, url: URL.createObjectURL(file), name: file.name, ocrText: '', translateX: 0, translateY: 0 }];
  state.coverMode = 'upload';
  const keptPages = keepGeneratedPagesAfterImageChange();
  renderUploadedImages();
  if (!keptPages) { invalidateGeneratedPages(); renderLivePreview(liveEnglish); }
  setOcrStatus(keptPages ? '首图已替换，后续文字分页保持不变' : '首图已加入；点击生成按钮开始 OCR');
  showToast(keptPages ? '首图已替换' : '首图已加入');
}

let tesseractPromise;
const hostedOcr = location.hostname.endsWith('.chatgpt.site');
const ocrAssets = hostedOcr
  ? {
      script: 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',
      worker: 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js',
      core: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.0/tesseract-core-simd-lstm.wasm.js',
      lang: 'https://tessdata.projectnaptha.com/4.0.0',
    }
  : { script: 'vendor/tesseract.min.js', worker: 'vendor/worker.min.js', core: 'vendor/tesseract-core-simd-lstm.wasm.js', lang: 'vendor' };
async function loadTesseract() {
  if (window.Tesseract) return window.Tesseract;
  if (!tesseractPromise) tesseractPromise = fetch(ocrAssets.script).then((response) => { if (!response.ok) throw new Error('OCR 引擎加载失败'); return response.text(); }).then((sourceCode) => { (0, eval)(sourceCode); if (!window.Tesseract) throw new Error('OCR 引擎初始化失败'); return window.Tesseract; });
  return tesseractPromise;
}
async function recognizeImage(item, index) {
  const TesseractEngine = await loadTesseract(); setOcrStatus(`正在识别第 ${index + 1} / ${state.images.length} 张图片…`, true);
  const worker = await TesseractEngine.createWorker('chi_sim', 1, { workerPath: ocrAssets.worker, corePath: ocrAssets.core, langPath: ocrAssets.lang, cachePath: hostedOcr ? 'tessdata' : 'vendor', gzip: true, logger: (message) => { if (message.status === 'recognizing text' && message.progress > .1) setOcrStatus(`正在识别第 ${index + 1} / ${state.images.length} 张图片 · ${Math.round(message.progress * 100)}%`, true); } });
  try { const result = await worker.recognize(item.file); item.ocrText = result?.data?.text?.trim() || ''; } finally { await worker.terminate(); }
  if (!item.ocrText) throw new Error('图片中没有识别到文字'); renderUploadedImages(); return item.ocrText;
}
async function getImageText() {
  if (!state.images.length) return [];
  const results = [];
  for (let index = 0; index < state.images.length; index += 1) {
    const item = state.images[index];
    try { results.push({ ...item, ocrText: item.ocrText || await recognizeImage(item, index) }); } catch { results.push({ ...item, ocrText: '' }); }
  }
  setOcrStatus(results.some((item) => item.ocrText) ? '图片文字识别完成，将和中文原稿一起翻译' : '图片未识别出文字，可直接在左侧补充中文原稿'); return results;
}

function splitLongBlock(block, maxLength) {
  const sentences = block.split(/(?<=[。！？.!?])\s*/).filter(Boolean);
  const parts = []; let current = '';
  sentences.forEach((sentence) => {
    if (sentence.length > maxLength) {
      if (current) { parts.push(current); current = ''; }
      let offset = 0;
      while (offset < sentence.length) {
        let end = Math.min(sentence.length, offset + maxLength);
        if (end < sentence.length) {
          const window = sentence.slice(offset, end);
          const boundary = Math.max(window.lastIndexOf('，'), window.lastIndexOf('、'), window.lastIndexOf('；'), window.lastIndexOf('：'), window.lastIndexOf(','), window.lastIndexOf(';'), window.lastIndexOf(':'));
          if (boundary >= Math.floor(maxLength * .62)) end = offset + boundary + 1;
          while (end < sentence.length && /[，。！？、；：,.!?;:）】》”’]/.test(sentence[end])) end += 1;
        }
        const part = sentence.slice(offset, end).trim();
        if (part) parts.push(part);
        offset = end;
      }
    } else if (current && current.length + sentence.length > maxLength) {
      parts.push(current); current = sentence;
    } else current += sentence;
  });
  if (current) parts.push(current);
  return parts;
}
function translationUnits(text) {
  return text.split(/\n+/).map((block) => block.trim()).filter(Boolean)
    .flatMap((block) => block.split(/(?<=[。！？；.!?;])\s*/).map((item) => item.trim()).filter(Boolean))
    .flatMap((block) => splitLongBlock(block, 180));
}
function splitText(text, maxLength = 420, maxParagraphs = 3) {
  const blocks = text.split(/\n+/).map((block) => block.trim()).filter(Boolean); if (!blocks.length) return [];
  const chunks = []; let current = []; let currentLength = 0;
  const pushCurrent = () => { if (current.length) chunks.push(current.join('\n')); current = []; currentLength = 0; };
  blocks.flatMap((block) => splitLongBlock(block, maxLength)).forEach((part) => {
    if (current.length && (current.length >= maxParagraphs || currentLength + part.length > maxLength)) pushCurrent();
    current.push(part); currentLength += part.length;
  });
  pushCurrent();
  if (chunks.length > 1 && chunks.at(-1).length < Math.max(70, maxLength * .32)) {
    chunks[chunks.length - 2] = `${chunks[chunks.length - 2]}\n${chunks.pop()}`;
  }
  return chunks;
}
function splitEnglishBlock(block, maxLength = 360) {
  const sentences = block.split(/(?<=[.!?])\s+/).map((item) => item.trim()).filter(Boolean);
  const parts = []; let current = '';
  sentences.forEach((sentence) => {
    if (current && `${current} ${sentence}`.length > maxLength) { parts.push(current); current = sentence; }
    else current = current ? `${current} ${sentence}` : sentence;
  });
  if (current) parts.push(current);
  return parts.length ? parts : [block];
}

function distributeUnits(units, targetCount) {
  if (!targetCount) return [];
  if (!units.length) return Array.from({ length: targetCount }, () => '');
  if (units.length < targetCount) {
    const words = units.join(' ').split(/\s+/).filter(Boolean);
    return Array.from({ length: targetCount }, (_, index) => {
      const start = Math.floor((index * words.length) / targetCount);
      const end = Math.floor(((index + 1) * words.length) / targetCount);
      return end > start ? words.slice(start, end).join(' ').trim() : '';
    });
  }
  return Array.from({ length: targetCount }, (_, index) => {
    const start = Math.floor((index * units.length) / targetCount);
    const end = Math.max(start + 1, Math.floor(((index + 1) * units.length) / targetCount));
    return units.slice(start, Math.min(end, units.length)).join(' ').trim();
  });
}

function alignedContentUnits(chinese, english) {
  const englishParagraphs = english.split(/\n+/).map((item) => item.trim()).filter(Boolean);
  const chineseUnits = translationUnits(chinese);
  let englishUnits = englishParagraphs;
  if (englishUnits.length !== chineseUnits.length) englishUnits = distributeUnits(englishUnits, chineseUnits.length);
  return chineseUnits.map((unit, index) => ({ chinese: unit, english: englishUnits[index] || '' }));
}

const paginationCanvas = document.createElement('canvas');
const paginationContext = paginationCanvas.getContext('2d');
function measureArticleRow(unit) {
  const fontSize = state.settings.bodyFont * 1.9;
  const lineHeight = Math.round(fontSize * state.settings.lineHeight);
  paginationContext.font = `400 ${fontSize}px Arial, "Helvetica Neue", sans-serif`;
  const englishLines = wrapCanvasText2(paginationContext, unit.english, 420, 'words').length;
  paginationContext.font = `400 ${fontSize}px Arial, "PingFang SC", sans-serif`;
  const chineseLines = wrapCanvasText2(paginationContext, unit.chinese, 410, 'chars').length;
  return Math.max(englishLines, chineseLines, 1) * lineHeight;
}

function paginateBilingualByHeight(chinese, english) {
  const maxContentPages = 4;
  const units = alignedContentUnits(chinese, english);
  if (!units.length) return [{ chinese, english }];
  const pageHeight = 1070;
  const minimumGap = Math.round(state.settings.bodyFont * 1.9 * 1.25);
  const pages = []; let current = []; let used = 0;
  units.forEach((unit) => {
    const rowHeight = measureArticleRow(unit);
    const projected = used + rowHeight + (current.length ? minimumGap : 0);
    if (current.length && projected > pageHeight) {
      pages.push(current);
      current = [unit];
      used = rowHeight;
    } else {
      current.push(unit);
      used = projected;
    }
  });
  if (current.length) pages.push(current);
  return pages.slice(0, maxContentPages).map((pageUnits) => ({
    chinese: pageUnits.map((unit) => unit.chinese).filter(Boolean).join('\n'),
    english: pageUnits.map((unit) => unit.english).filter(Boolean).join('\n'),
  }));
}

function makePages(manualText, titleChinese, titleEnglish, english, imageTexts, initialSource = 'online') {
  const ocrText = imageTexts.map((item) => item.ocrText).filter(Boolean).join('\n');
  const sourceText = manualText.trim() || ocrText;
  const contentPages = paginateBilingualByHeight(sourceText, english);
  const coverContent = contentPages[0] || { chinese: sourceText, english };
  return [
    { ...coverContent, role: 'cover', titleChinese, titleEnglish, image: currentCoverImage(), translationSource: initialSource },
    ...contentPages.map((content) => ({ ...content, role: 'article', titleChinese, titleEnglish, image: null, translationSource: initialSource })),
  ].slice(0, 5);
}

function fitPreviewArticleText() {
  const rows = preview.articleColumns.children.length;
  preview.articlePage.style.setProperty('--article-gap', rows > 1 ? '2.6cqw' : '0');
}

function bindPreviewImagePosition(image, item) {
  const applyPosition = () => {
    const position = imagePosition(item);
    image.style.transform = `translate(calc(-50% + ${position.x}%), calc(-50% + ${position.y}%)) scale(${state.settings.imageScale / 100})`;
  };
  let dragStart = null;
  applyPosition();
  image.draggable = false;
  preview.visual.classList.add('is-adjustable');
  preview.visual.title = '按住拖动图片自由取景，双击恢复居中';
  image.addEventListener('pointerdown', (event) => {
    const position = imagePosition(item);
    dragStart = { pointerX: event.clientX, pointerY: event.clientY, x: position.x, y: position.y };
    image.setPointerCapture(event.pointerId);
    preview.visual.classList.add('is-dragging');
    event.preventDefault();
  });
  image.addEventListener('pointermove', (event) => {
    if (!dragStart) return;
    const rect = preview.visual.getBoundingClientRect();
    item.translateX = Math.max(-70, Math.min(70, dragStart.x + ((event.clientX - dragStart.pointerX) / Math.max(1, rect.width)) * 100));
    item.translateY = Math.max(-70, Math.min(70, dragStart.y + ((event.clientY - dragStart.pointerY) / Math.max(1, rect.height)) * 100));
    applyPosition();
  });
  const finishDrag = (event) => {
    if (!dragStart) return;
    dragStart = null;
    preview.visual.classList.remove('is-dragging');
    try { image.releasePointerCapture(event.pointerId); } catch {}
  };
  image.addEventListener('pointerup', finishDrag);
  image.addEventListener('pointercancel', finishDrag);
  image.addEventListener('dblclick', () => {
    item.translateX = 0;
    item.translateY = 0;
    applyPosition();
    showToast('图片位置已恢复为居中');
  });
  const hint = document.createElement('span');
  hint.className = 'image-position-hint';
  hint.textContent = '✥ 按住拖动自由取景 · 双击复位';
  preview.visual.appendChild(hint);
}

function renderPreview(page, index = 0, isLive = false) {
  const chinese = page.chinese || source.value.trim();
  const english = page.english || localTranslate(chinese);
  const lines = chinese.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const isQuote = page.role === 'cover' || page.role === 'closing' || Boolean(page.image?.url);
  const fallbackTitleZh = lines[0] || chinese;
  const fallbackTitleEn = english || defaultPreview.english;
  const titleZh = isQuote
    ? (page.titleChinese ? headline(page.titleChinese, 24) : quoteChineseTitle(fallbackTitleZh))
    : headline(page.titleChinese || fallbackTitleZh, 46);
  const titleEn = isQuote
    ? (page.titleEnglish ? headline(page.titleEnglish, 64) : quoteEnglishTitle(fallbackTitleEn))
    : headline(page.titleEnglish || firstSentence(fallbackTitleEn), 46);
  applyBrand();
  noteCard.classList.toggle('is-quote', isQuote);
  preview.quotePage.style.display = isQuote ? 'flex' : 'none'; preview.articlePage.style.display = isQuote ? 'none' : 'grid';
  if (isQuote) {
    preview.visual.innerHTML = '';
    if (page.image?.url) {
      const image = document.createElement('img');
      image.src = page.image.url;
      image.alt = page.image.name || 'uploaded image';
      image.classList.toggle('fit-contain', state.settings.imageFit === 'contain');
      preview.visual.appendChild(image);
      bindPreviewImagePosition(image, page.image);
    }
    const bodyEn = page.titleEnglish ? english : english.replace(firstSentence(english), '').trim();
    const bodyZh = page.titleChinese ? chinese : chinese.replace(lines[0] || '', '').trim();
    preview.quoteEnglish.textContent = titleEn || english; preview.quoteChinese.textContent = titleZh || chinese; preview.quoteBulletEn.textContent = bulletText(bodyEn, 'Clarity gives you room to choose.', 115); preview.quoteBulletZh.textContent = bulletText(bodyZh, '清楚自己要什么，也清楚自己不要什么。', 70);
  } else {
    preview.articlePage.dataset.density = english.length > 520 || chinese.length > 250 ? 'dense' : 'normal';
    preview.articleTitle.textContent = titleEn || 'Bilingual Notes'; renderArticleRows(english, chinese);
    fitPreviewArticleText();
  }
  document.querySelector('.preview-title').textContent = isLive ? 'LIVE PREVIEW · 实时渲染' : `PAGE ${String(index + 1).padStart(2, '0')} · 成品预览`; state.currentPage = index;
  [...pageStrip.querySelectorAll('button')].forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
  updatePageNavigation();
  return titleEn;
}
function renderLivePreview(english = liveEnglish, titleEnglish = liveTitleEnglish) {
  const fullChinese = source.value.trim();
  const titleChinese = titleInput.value.trim();
  const livePages = paginateBilingualByHeight(fullChinese, english || localTranslate(fullChinese));
  const firstPage = livePages[0] || { chinese: fullChinese, english };
  const chinese = firstPage.chinese || fullChinese;
  const page = chinese
    ? { chinese, english: firstPage.english || english || localTranslate(chinese), role: 'cover', titleChinese, titleEnglish, image: currentCoverImage() }
    : { chinese: defaultPreview.chinese, english: defaultPreview.english, role: 'cover', titleChinese, titleEnglish, image: currentCoverImage() };
  liveEnglish = page.english;
  liveTitleEnglish = titleEnglish;
  renderPreview(page, 0, true);
  exportHint.textContent = '1080×1440 · 实时预览已更新 · 点击生成后导出最新内容';
}
function scheduleLivePreview() {
  updateCount();
  clearTimeout(liveTimer);
  liveRequestId += 1;
  const requestId = liveRequestId;
  if (liveAbortController) liveAbortController.abort();
  if (state.pages.length) invalidateGeneratedPages();
  const chinese = source.value.trim();
  const titleChinese = titleInput.value.trim();
  if (!chinese && !titleChinese) { liveEnglish = defaultPreview.english; liveTitleEnglish = ''; renderLivePreview(); setStatus('等待你的中文原稿', false); return; }
  const previewChinese = splitText(chinese, 420, 4)[0] || chinese;
  liveEnglish = localTranslate(previewChinese);
  liveTitleEnglish = titleChinese ? localTranslate(titleChinese) : '';
  renderLivePreview(liveEnglish, liveTitleEnglish);
  setStatus('正在翻译并同步右侧 · 下载暂未开放', true);
  liveTimer = setTimeout(async () => {
    liveAbortController = new AbortController();
    try {
      const translated = previewChinese ? await remoteTranslate(previewChinese, liveAbortController.signal) : '';
      const translatedTitle = titleChinese ? await remoteTranslate(titleChinese, liveAbortController.signal) : '';
      if (requestId !== liveRequestId) return;
      liveEnglish = translated;
      liveTitleEnglish = translatedTitle;
      renderLivePreview(translated, translatedTitle);
      setStatus('右侧已同步实时翻译 · 点击红色按钮确认分页并开放下载', false);
    } catch (error) {
      if (requestId !== liveRequestId || liveAbortController?.signal.aborted) return;
      renderLivePreview(localTranslate(chinese), titleChinese ? localTranslate(titleChinese) : '');
      setStatus('右侧已同步备用翻译 · 点击红色按钮重试并开放下载', false);
    }
  }, 650);
}

function applyGeneratedTitle(titleChinese, titleEnglish) {
  if (!state.document || !state.pages.length) return;
  state.document.titleChinese = titleChinese;
  state.document.titleEnglish = titleEnglish;
  state.pages.forEach((page) => {
    page.titleChinese = titleChinese || (page.role === 'closing' ? '把成长还给孩子' : '');
    page.titleEnglish = titleEnglish || (page.role === 'closing' ? 'Let Growth Belong to the Child' : '');
  });
  renderPreview(state.pages[state.currentPage], state.currentPage);
}

function scheduleTitlePreview() {
  clearTimeout(liveTimer);
  liveRequestId += 1;
  const requestId = liveRequestId;
  if (liveAbortController) liveAbortController.abort();
  const titleChinese = titleInput.value.trim();
  if (!state.pages.length || !state.document) {
    scheduleLivePreview();
    return;
  }
  const localTitle = titleChinese ? localTranslate(titleChinese) : '';
  applyGeneratedTitle(titleChinese, localTitle);
  setStatus('标题已实时同步 · 正在刷新英文标题', true);
  liveTimer = setTimeout(async () => {
    liveAbortController = new AbortController();
    try {
      const translatedTitle = titleChinese ? await remoteTranslate(titleChinese, liveAbortController.signal) : '';
      if (requestId !== liveRequestId) return;
      liveTitleEnglish = translatedTitle;
      applyGeneratedTitle(titleChinese, translatedTitle);
      setStatus(`标题已同步 · 当前第 ${state.currentPage + 1} / ${state.pages.length} 页`, false);
    } catch (error) {
      if (requestId !== liveRequestId || liveAbortController?.signal.aborted) return;
      applyGeneratedTitle(titleChinese, localTitle);
      setStatus(`标题已用备用翻译同步 · 当前第 ${state.currentPage + 1} / ${state.pages.length} 页`, false);
    }
  }, 450);
}

function renderPageStrip() {
  pageStrip.innerHTML = '';
  state.pages.forEach((page, index) => {
    const button = document.createElement('button');
    const typeLabel = page.role === 'cover' ? '封面' : page.role === 'closing' ? '收束' : '正文';
    button.type = 'button'; button.className = index === state.currentPage ? 'active' : '';
    button.setAttribute('aria-label', `第 ${index + 1} 页 · ${typeLabel}`);
    button.innerHTML = `<span class="story-number">${String(index + 1).padStart(2, '0')}</span><i class="story-mini ${page.role || 'article'}"><b></b><em></em></i><small>${typeLabel}</small>`;
    button.addEventListener('click', () => renderPreview(page, index)); pageStrip.appendChild(button);
    const mini = button.querySelector('.story-mini');
    canvasForPage(page).then((canvas) => {
      if (!button.isConnected || state.pages[index] !== page) return;
      const thumbnail = document.createElement('canvas');
      thumbnail.width = 162;
      thumbnail.height = 216;
      thumbnail.getContext('2d').drawImage(canvas, 0, 0, thumbnail.width, thumbnail.height);
      mini.appendChild(thumbnail);
      mini.classList.add('has-preview');
    });
  });
  updatePageNavigation();
  exportHint.textContent = state.pages.length ? `1080×1440 · 已生成 ${state.pages.length} 张 · 图片和 Markdown 一起打包。` : '请先翻译并同步右侧，完成后才能下载。';
}

function renderReviewEditor() {
  reviewEditor.innerHTML = '';
  state.pages.forEach((page, index) => {
    if (page.role !== 'article') return;
    const row = document.createElement('div');
    row.className = 'review-row';
    row.innerHTML = `<strong>正文 ${index}</strong><label>English<textarea aria-label="第 ${index + 1} 页英文"></textarea></label><label>中文<textarea aria-label="第 ${index + 1} 页中文"></textarea></label>`;
    const [englishArea, chineseArea] = row.querySelectorAll('textarea');
    englishArea.value = page.english; chineseArea.value = page.chinese;
    const sync = () => { page.english = englishArea.value; page.chinese = chineseArea.value; if (state.currentPage === index) renderPreview(page, index); };
    englishArea.addEventListener('input', sync); chineseArea.addEventListener('input', sync);
    reviewEditor.appendChild(row);
  });
  reviewPanel.hidden = !reviewEditor.children.length;
}

async function generate() {
  clearTimeout(liveTimer);
  liveRequestId += 1;
  if (liveAbortController) liveAbortController.abort();
  liveAbortController = null;
  const manualInput = source.value.trim(); const titleChinese = titleInput.value.trim(); if (!manualInput && !titleChinese && !state.images.length) { source.focus(); showToast('先写下标题、中文正文，或上传一张图片'); return; }
  const length = document.querySelector('#lengthSelect').value; generateBtn.disabled = true; setDownloadsEnabled(false); generateLabel.textContent = '正在翻译并同步右侧…'; setStatus('正在读取内容并翻译，完成后才能下载', true);
  const imageTexts = manualInput ? state.images.map((item) => ({ ...item, ocrText: item.ocrText || '' })) : await getImageText(); const rawText = manualInput || imageTexts.map((item) => item.ocrText).filter(Boolean).join('\n'); const prepared = productionText(rawText); const combinedText = prepared.text; if (!combinedText && !titleChinese) { generateBtn.disabled = false; generateLabel.textContent = '一键翻译并生成笔记'; setStatus('没有读到中文内容，请补充文字或换一张图片', false); showToast('图片 OCR 没有识别出中文'); return; } let english = ''; let titleEnglish = ''; let usingLocal = false;
  try { english = combinedText ? await translateLongText(combinedText) : ''; } catch { english = combinedText ? translationUnits(combinedText).map((unit) => localTranslate(unit)).join('\n') : ''; usingLocal = true; }
  try { titleEnglish = titleChinese ? await remoteTranslate(titleChinese) : ''; } catch { titleEnglish = titleChinese ? localTranslate(titleChinese) : ''; usingLocal = true; }
  if (length === 'long' && !english.endsWith('.')) english += '.';
  state.document = { manualText: combinedText, titleChinese, titleEnglish, english, imageTexts, translationSource: usingLocal ? 'local' : 'online' };
  state.pages = makePages(combinedText, titleChinese, titleEnglish, english, imageTexts, state.document.translationSource); state.currentPage = 0; renderPageStrip(); renderReviewEditor(); const titleEn = renderPreview(state.pages[0], 0);
  const hasLocalPage = state.pages.some((page) => page.translationSource === 'local');
  setDownloadsEnabled(!hasLocalPage);
  setStatus(hasLocalPage ? `有页面尚未完成在线翻译 · 已同步预览但暂不能下载 · 点击重试` : `在线翻译已完成并同步右侧 · 共 ${state.pages.length} 页 · 可以下载`, false);
  generateBtn.disabled = false; generateLabel.textContent = '重新翻译并同步右侧'; showToast(hasLocalPage ? '在线翻译暂未完成，请点击重试' : prepared.shortened ? '内容已自动精简并完成排版' : `翻译完成，右侧已同步 ${state.pages.length} 页 · ${titleEn}`);
}

function downloadFile(filename, content, type) { downloadBlob(filename, new Blob([content], { type })); }
function downloadBlob(filename, blob) { const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
function noteMarkdown() { return state.pages.map((page, index) => `# ${index + 1}. ${shortTitle(page.titleChinese || page.chinese)}\n\n## 中文标题\n\n${page.titleChinese || ''}\n\n## English Title\n\n${page.titleEnglish || ''}\n\n## 中文笔记\n\n${page.chinese}\n\n## English Note\n\n${page.english}\n\n## Takeaway\n\n${getTakeaway(page.english, document.querySelector('#toneSelect').value)}\n`).join('\n---\n\n') + `\nGenerated by 双语排版工具 · ${brandName()}\n`; }
function wrapCanvasText2(ctx, text, maxWidth, mode = 'chars') {
  const clean = text.replace(/\n+/g, ' ').trim();
  const lines = []; let line = '';
  if (mode === 'words') {
    clean.split(' ').filter(Boolean).forEach((token) => {
      const next = line ? `${line} ${token}` : token;
      if (line && ctx.measureText(next).width > maxWidth) { lines.push(line); line = token; }
      else line = next;
    });
  } else {
    const closing = /[，。！？、；：,.!?;:）】》”’]/;
    const opening = /[（【《“‘]/;
    [...clean].forEach((token) => {
      if (!line && closing.test(token) && lines.length) { lines[lines.length - 1] += token; return; }
      const next = line + token;
      if (line && ctx.measureText(next).width > maxWidth) {
        if (closing.test(token)) { lines.push(line + token); line = ''; return; }
        let carry = '';
        while (line && opening.test(line.at(-1))) { carry = line.at(-1) + carry; line = line.slice(0, -1); }
        if (line) lines.push(line);
        line = carry + token;
      } else line = next;
    });
  }
  if (line) lines.push(line);
  return lines;
}
function fitCanvasFont(ctx, text, maxWidth, maxSize, minSize, family) { let size = maxSize; do { ctx.font = `500 ${size}px ${family}`; size -= 1; } while (ctx.measureText(text).width > maxWidth && size >= minSize); return Math.max(minSize, size + 1); }
function drawImageCover(ctx, image, x, y, width, height, item) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const fitScale = state.settings.imageFit === 'contain'
    ? Math.min(width / sourceWidth, height / sourceHeight)
    : Math.max(width / sourceWidth, height / sourceHeight);
  const scale = fitScale * (state.settings.imageScale / 100);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  const position = imagePosition(item);
  const drawX = x + (width - drawWidth) / 2 + width * (position.x / 100);
  const drawY = y + (height - drawHeight) / 2 + height * (position.y / 100);
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}
function drawCanvasBullet(ctx, text, x, y, width, font, lineHeight, mode, maxLines) {
  ctx.font = font; ctx.fillStyle = '#050505'; ctx.fillText('•', x, y); const lines = wrapCanvasText2(ctx, text, width - 50, mode).slice(0, maxLines); lines.forEach((line, index) => ctx.fillText(line, x + 46, y + index * lineHeight)); return y + Math.max(1, lines.length) * lineHeight;
}
function drawArticleCanvasBlocks(ctx, text, x, startY, width, font, lineHeight, mode, paragraphGap) {
  let y = startY; ctx.font = font; ctx.fillStyle = '#050505';
  splitArticleBlocks(text).forEach((block) => { const lines = wrapCanvasText2(ctx, block, width, mode); lines.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight)); y += Math.max(1, lines.length) * lineHeight + paragraphGap; });
  return y;
}
function fitArticleCanvasBody(ctx, text, width, mode, maxSize) {
  const blocks = splitArticleBlocks(text);
  for (let size = maxSize; size >= 22; size -= 1) {
    ctx.font = `400 ${size}px Arial, ${mode === 'chars' ? '"PingFang SC", ' : ''}sans-serif`;
    const lineHeight = Math.round(size * (mode === 'chars' ? 1.44 : 1.38));
    const gap = Math.round(size * 2.35);
    const lineCount = blocks.reduce((sum, block) => sum + wrapCanvasText2(ctx, block, width, mode).length, 0);
    const needed = lineCount * lineHeight + Math.max(0, blocks.length - 1) * gap;
    if (needed <= 1160) return { size, lineHeight, gap };
  }
  return { size: 22, lineHeight: mode === 'chars' ? 32 : 30, gap: 48 };
}
function drawReferenceCanvasPage(ctx, page) {
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 1080, 1440);
  if (page.image?.url) {
    const image = new Image(); image.onload = () => { drawImageCover(ctx, image, 0, 0, 1080, Math.round(1440 * state.settings.coverHeight / 100), page.image); drawQuoteCanvasText(ctx, page); }; image.onerror = () => drawQuoteCanvasText(ctx, page); image.src = page.image.url; return;
  }
  drawArticleCanvasText(ctx, page);
}
function drawBrandChrome(ctx, isQuote = false) {
  const brand = brandName();
  const badgeText = headline(brand, 12);
  ctx.save();
  ctx.font = '800 29px "PingFang SC", "Noto Serif SC", serif';
  const badgeWidth = Math.min(370, Math.max(180, Math.ceil(ctx.measureText(badgeText).width + 54)));
  ctx.fillStyle = '#861d2d';
  ctx.beginPath();
  ctx.roundRect(22, 20, badgeWidth, 68, 10);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText(badgeText, 22 + badgeWidth / 2, 64);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#050505';
  ctx.textAlign = 'center';
  ctx.font = '500 27px Arial, "PingFang SC", sans-serif';
  ctx.fillText(`@${headline(brand, 20)}`, 540, 1408);
  ctx.restore();
}
function drawQuoteCanvasText(ctx, page) {
  const firstChineseLine = page.chinese.split(/\n+/).map((line) => line.trim()).filter(Boolean)[0] || page.chinese; const titleEn = page.titleEnglish ? headline(page.titleEnglish, 64) : quoteEnglishTitle(page.english); const titleZh = page.titleChinese ? headline(page.titleChinese, 24) : quoteChineseTitle(firstChineseLine); const bodyEn = page.titleEnglish ? page.english : page.english.replace(firstSentence(page.english), '').trim() || page.english; const bodyZh = page.titleChinese ? page.chinese : page.chinese.replace(firstChineseLine, '').trim() || page.chinese;
  const imageHeight = Math.round(1440 * state.settings.coverHeight / 100);
  const contentHeight = 1420 - imageHeight;
  const compact = Math.max(.55, Math.min(1, contentHeight / 855));
  const englishTitleSize = Math.round(56 * compact);
  const chineseTitleSize = Math.round(state.settings.coverTitle * 1.8);
  const englishTitleLine = Math.round(62 * compact);
  const chineseTitleLine = Math.round(104 * compact);
  const bodySize = Math.max(15, Math.round(state.settings.bodyFont * 1.9 * compact));
  const bodyLine = Math.round(bodySize * state.settings.lineHeight);
  const englishStart = imageHeight + englishTitleSize + Math.round(36 * compact);
  ctx.textAlign = 'center'; ctx.fillStyle = '#050505'; ctx.font = `600 ${englishTitleSize}px Georgia, "Times New Roman", serif`; const enLines = wrapCanvasText2(ctx, titleEn, 950, 'words').slice(0, 2); enLines.forEach((line, index) => ctx.fillText(line, 540, englishStart + index * englishTitleLine));
  const chineseStart = englishStart + Math.max(1, enLines.length) * englishTitleLine + Math.round(88 * compact); ctx.font = `600 ${chineseTitleSize}px "Songti SC", STSong, "Noto Serif SC", serif`; const zhLines = wrapCanvasText2(ctx, titleZh, 1030, 'chars').slice(0, 2); zhLines.forEach((line, index) => ctx.fillText(line, 540, chineseStart + index * chineseTitleLine));
  ctx.textAlign = 'left'; const bulletStart = chineseStart + Math.max(1, zhLines.length) * chineseTitleLine + Math.round(72 * compact); const bulletEnEnd = drawCanvasBullet(ctx, bodyEn, 40, bulletStart, 1000, `500 ${bodySize}px Arial, "Helvetica Neue", sans-serif`, bodyLine, 'words', state.settings.coverHeight > 62 ? 1 : 3); drawCanvasBullet(ctx, bodyZh, 40, bulletEnEnd + Math.round(16 * compact), 1000, `400 ${bodySize}px Arial, "PingFang SC", sans-serif`, bodyLine, 'chars', state.settings.coverHeight > 62 ? 1 : 2);
  drawBrandChrome(ctx, true);
}
function drawArticleCanvasRows(ctx, page, startY) {
  const englishBlocks = splitArticleBlocks(page.english);
  const chineseBlocks = splitArticleBlocks(page.chinese);
  const count = Math.max(englishBlocks.length, chineseBlocks.length, 1);
  const available = Math.max(0, 1340 - startY);
  const englishSize = state.settings.bodyFont * 1.9;
  const chineseSize = englishSize;
  const englishLine = Math.round(englishSize * state.settings.lineHeight);
  const chineseLine = englishLine;
  ctx.font = `400 ${englishSize}px Arial, "Helvetica Neue", sans-serif`;
  const englishHeights = englishBlocks.map((block) => wrapCanvasText2(ctx, block, 420, 'words').length * englishLine);
  ctx.font = `400 ${chineseSize}px Arial, "PingFang SC", sans-serif`;
  const chineseHeights = chineseBlocks.map((block) => wrapCanvasText2(ctx, block, 410, 'chars').length * chineseLine);
  const rowHeights = Array.from({ length: count }, (_, index) => Math.max(englishHeights[index] || 0, chineseHeights[index] || 0, chineseLine));
  const total = rowHeights.reduce((sum, height) => sum + height, 0);
  const gap = count > 1 ? Math.max(18, Math.min(38, Math.floor((available - total) / (count - 1)))) : 0;
  const fit = { englishSize, chineseSize, englishLine, chineseLine, gap };
  let y = startY;
  ctx.fillStyle = '#050505';
  for (let index = 0; index < count; index += 1) {
    const english = englishBlocks[index] || '';
    const chinese = chineseBlocks[index] || '';
    ctx.font = `400 ${fit.englishSize}px Arial, "Helvetica Neue", sans-serif`;
    const englishLines = wrapCanvasText2(ctx, english, 420, 'words');
    ctx.font = `400 ${fit.chineseSize}px Arial, "PingFang SC", sans-serif`;
    const chineseLines = wrapCanvasText2(ctx, chinese, 410, 'chars');
    const rowHeight = Math.max(englishLines.length * fit.englishLine, chineseLines.length * fit.chineseLine, fit.chineseLine);
    if (y + rowHeight > 1340) break;
    ctx.font = `400 ${fit.englishSize}px Arial, "Helvetica Neue", sans-serif`;
    englishLines.forEach((line, lineIndex) => ctx.fillText(line, 37, y + lineIndex * fit.englishLine));
    ctx.font = `400 ${fit.chineseSize}px Arial, "PingFang SC", sans-serif`;
    chineseLines.forEach((line, lineIndex) => ctx.fillText(line, 637, y + lineIndex * fit.chineseLine));
    y += rowHeight + fit.gap;
  }
}
function drawArticleCanvasText(ctx, page) {
  const title = headline(page.titleEnglish || firstSentence(page.english), 52); ctx.fillStyle = '#050505'; const titleFontSize = fitCanvasFont(ctx, title, 1000, 52, 34, 'Georgia, "Times New Roman", serif'); ctx.font = `500 ${titleFontSize}px Georgia, "Times New Roman", serif`; const titleLines = wrapCanvasText2(ctx, title, 1000, 'words').slice(0, 2); titleLines.forEach((line, index) => ctx.fillText(line, 37, 145 + index * (titleFontSize + 5))); const ruleY = 179 + Math.max(0, titleLines.length - 1) * (titleFontSize + 5); ctx.fillStyle = '#989898'; ctx.fillRect(21, ruleY, 1028, 7);
  drawArticleCanvasRows(ctx, page, ruleY + 72);
  drawBrandChrome(ctx, false);
}
function canvasForPage(page) {
  return new Promise((resolve) => { const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1440; const ctx = canvas.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 1080, 1440); if (page.image?.url) { const image = new Image(); image.onload = () => { drawImageCover(ctx, image, 0, 0, 1080, Math.round(1440 * state.settings.coverHeight / 100), page.image); drawQuoteCanvasText(ctx, page); resolve(canvas); }; image.onerror = () => { drawQuoteCanvasText(ctx, page); resolve(canvas); }; image.src = page.image.url; } else { drawArticleCanvasText(ctx, page); resolve(canvas); } });
}
function pageBlob(canvas) { return new Promise((resolve) => canvas.toBlob(resolve, 'image/png')); }
async function downloadCurrentPng() { if (!state.pages.length) { showToast('请先生成双语笔记'); return; } const canvas = await canvasForPage(state.pages[state.currentPage], state.currentPage, state.pages.length); downloadBlob(`bilingual-note-${String(state.currentPage + 1).padStart(2, '0')}.png`, await pageBlob(canvas)); showToast('当前页 PNG 已下载'); }
async function copyCurrentCard() {
  if (!state.pages.length) { showToast('请先生成双语笔记'); return; }
  if (!window.html2canvas || !navigator.clipboard?.write || typeof ClipboardItem === 'undefined') { showToast('当前浏览器不支持图片复制，请使用“下载本张”'); return; }
  copyCurrentCardButton.disabled = true;
  copyCurrentCardButton.textContent = '正在复制…';
  try {
    const canvas = await window.html2canvas(noteCard, { scale: 3, backgroundColor: '#fff', useCORS: true, allowTaint: false, logging: false });
    const blob = await pageBlob(canvas);
    if (!blob) throw new Error('empty image');
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    showToast('本张卡片已复制，可直接 Cmd+V 粘贴');
  } catch {
    showToast('复制未获系统授权，请改用“下载本张”');
  } finally {
    copyCurrentCardButton.disabled = false;
    copyCurrentCardButton.textContent = '📋 复制本张';
  }
}
function crc32(bytes) { let crc = 0xffffffff; for (const byte of bytes) { crc ^= byte; for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); } return (crc ^ 0xffffffff) >>> 0; }
function zipNumber(value, size) { const bytes = new Uint8Array(size); for (let index = 0; index < size; index += 1) bytes[index] = (value >>> (8 * index)) & 0xff; return bytes; }
function concatBytes(parts) { const total = parts.reduce((sum, part) => sum + part.length, 0); const result = new Uint8Array(total); let offset = 0; parts.forEach((part) => { result.set(part, offset); offset += part.length; }); return result; }
async function buildZip(files) {
  const encoder = new TextEncoder(); const locals = []; const centrals = []; let offset = 0;
  for (const file of files) {
    const name = encoder.encode(file.name); const data = typeof file.data === 'string' ? encoder.encode(file.data) : new Uint8Array(await file.data.arrayBuffer()); const checksum = crc32(data); const local = concatBytes([new Uint8Array([0x50, 0x4b, 0x03, 0x04]), zipNumber(20, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(checksum, 4), zipNumber(data.length, 4), zipNumber(data.length, 4), zipNumber(name.length, 2), zipNumber(0, 2), name, data]); locals.push(local);
    const central = concatBytes([new Uint8Array([0x50, 0x4b, 0x01, 0x02]), zipNumber(20, 2), zipNumber(20, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(checksum, 4), zipNumber(data.length, 4), zipNumber(data.length, 4), zipNumber(name.length, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 4), zipNumber(offset, 4), name]); centrals.push(central); offset += local.length;
  }
  const centralData = concatBytes(centrals); const end = concatBytes([new Uint8Array([0x50, 0x4b, 0x05, 0x06]), zipNumber(0, 2), zipNumber(0, 2), zipNumber(files.length, 2), zipNumber(files.length, 2), zipNumber(centralData.length, 4), zipNumber(offset, 4), zipNumber(0, 2)]); return new Blob([...locals, centralData, end], { type: 'application/zip' });
}
async function downloadZip() {
  if (!state.pages.length) { showToast('请先生成双语笔记'); return; }
  setStatus(`正在制作 ${state.pages.length} 页 ZIP`, true); const files = [];
  for (let index = 0; index < state.pages.length; index += 1) { const canvas = await canvasForPage(state.pages[index], index, state.pages.length); files.push({ name: `bilingual-note-${String(index + 1).padStart(2, '0')}.png`, data: await pageBlob(canvas) }); }
  files.push({ name: 'bilingual-note.md', data: noteMarkdown() }); files.push({ name: 'README.txt', data: `${brandName()}双语笔记\n${state.pages.length} 张 PNG + Markdown\n` }); downloadBlob('bilingual-note.zip', await buildZip(files)); setStatus(`ZIP 已准备完成 · ${state.pages.length} 张`, false); showToast('ZIP 笔记包已下载');
}

source.addEventListener('input', scheduleLivePreview); titleInput.addEventListener('input', scheduleTitlePreview); generateBtn.addEventListener('click', generate); imageUpload.addEventListener('change', (event) => { addImages(event.target.files); event.target.value = ''; });
previousPageButton.addEventListener('click', () => { if (state.currentPage > 0) renderPreview(state.pages[state.currentPage - 1], state.currentPage - 1); });
nextPageButton.addEventListener('click', () => { if (state.currentPage < state.pages.length - 1) renderPreview(state.pages[state.currentPage + 1], state.currentPage + 1); });
brandInput.addEventListener('input', () => { applyBrand(); if (state.pages.length) renderPreview(state.pages[state.currentPage], state.currentPage); });
['dragenter', 'dragover'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.add('dragging'); })); ['dragleave', 'drop'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.remove('dragging'); })); dropzone.addEventListener('drop', (event) => addImages(event.dataTransfer.files));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') generate(); }); document.querySelectorAll('.preset').forEach((button) => button.addEventListener('click', () => { source.value = button.dataset.text; scheduleLivePreview(); source.focus(); showToast('已载入一条灵感'); })); document.querySelector('#toneSelect').addEventListener('change', () => { if (state.pages.length) renderPreview(state.pages[state.currentPage], state.currentPage); else renderLivePreview(liveEnglish); });
document.querySelector('#lengthSelect').addEventListener('change', () => { invalidateGeneratedPages(); renderLivePreview(liveEnglish, liveTitleEnglish); setStatus('英文长度已变化，请重新翻译后下载', false); });
document.querySelector('#downloadMd').addEventListener('click', () => { if (!state.pages.length) { showToast('请先生成双语笔记'); return; } downloadFile('bilingual-note.md', noteMarkdown(), 'text/markdown;charset=utf-8'); showToast('Markdown 笔记已下载'); }); document.querySelector('#downloadPng').addEventListener('click', downloadCurrentPng); document.querySelector('#downloadZip').addEventListener('click', downloadZip);
copyCurrentCardButton?.addEventListener('click', copyCurrentCard); downloadCurrentCardButton?.addEventListener('click', downloadCurrentPng);
autoMatchIllustrationButton?.addEventListener('click', autoMatchIllustration);
manualUploadIllustrationButton?.addEventListener('click', () => imageUpload.click());
document.querySelectorAll('[data-art-filter]').forEach((button) => button.addEventListener('click', () => {
  state.artFilter = button.dataset.artFilter;
  document.querySelectorAll('[data-art-filter]').forEach((item) => item.classList.toggle('active', item === button));
  renderIllustrationLibrary();
}));
[controls.coverHeight, controls.imageScale, controls.coverTitle].forEach((input) => input.addEventListener('input', () => { applyDesignSettings({ rerender: true, repaginate: false }); if (state.pages.length) renderPageStrip(); }));
controls.imageFit.addEventListener('change', () => { applyDesignSettings({ rerender: true, repaginate: false }); if (state.pages.length) renderPageStrip(); setStatus('图片显示方式已同步到预览与导出', false); });
[controls.bodyFont, controls.lineHeight].forEach((input) => input.addEventListener('input', () => { applyDesignSettings({ rerender: true, repaginate: true }); setStatus(state.pages.length ? `排版参数已更新 · 当前 ${state.pages.length} 页` : '排版参数已同步到实时预览', false); }));
state.libraryImage = null;
updateCount(); renderUploadedImages(); renderIllustrationLibrary(); renderReviewEditor(); applyBrand(); applyDesignSettings({ rerender: false }); renderLivePreview(liveEnglish); setDownloadsEnabled(false); renderPageStrip();
