/*!
 * @license MPL-2.0-no-copyleft-exception
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 */

export default {
  locale: 'en',

  title: 'tReader',
  titleWithName: '{0} - tReader',

  listFilterClear: 'Clear Search',
  listSortTitle: 'Sort by',
  listSortByDateRead: 'Date Read',
  listSortByDateAdd: 'Date Add',
  listSortByTitle: 'Title',
  listSortCancel: 'Cancel',
  listImportTip: 'Reading text file...',
  listNotYetRead: 'NEW',
  listSearchPlaceholder: 'Search',
  listEmptySearchTip: 'Cannot find files match searching',
  listEmptyTip: 'Tap the add mark import files',

  readContentsTemplate: 'Template',
  readContentsTemplateDescription: 'Template for the table of content: Use asterisk (*) for wildcard',
  readContentsTemplateHistory: 'Recent',
  readContentsTemplateSubmit: 'Build',
  readContentsTemplateClear: 'Clear Recent',
  readContentsEmpty: 'No table of contents yet.\nYou may click refresh button to build one.',
  readBookmarkEmpty: 'No bookmarks yet.\nYou may click add bookmark button to add one.',
  readSearchPlaceholder: 'Search',
  readSearchInitial: 'Input some words so you can find them in text...',
  readSearchEmpty: 'Cannot find "{0}"',
  readSearchTooMany: '{0} results found; Find More',
  readPagePrevious: 'Previous Page',
  readPageNext: 'Next Page',
  readPageScrollUp: 'Scroll Up',
  readPageScrollDown: 'Scroll Down',
  readControlClose: 'Hide buttons',
  readAutoScrollStop: 'Stop auto scroll',

  configPageTitle: 'Settings',
  configWithDetail: 'Detail',
  configModeGroupTitle: 'Mode',
  configMode: 'View Mode',
  configModeFlip: 'Flip',
  configModeScroll: 'Scroll',
  configThemeGroupTitle: 'Theme',
  configTheme: 'Theme',
  configThemeAuto: 'Auto',
  configThemeLight: 'Light',
  configThemeDark: 'Dark',
  configDarkThemeGroupTitle: 'Dark Theme',
  configDarkThemeColor: 'Reader Text',
  configDarkThemeBackground: 'Reader Background',
  configLightThemeGroupTitle: 'Light Theme',
  configLightThemeColor: 'Reader Text',
  configLightThemeBackground: 'Reader Background',
  configTextGroupTitle: 'Reader Text',
  configTextFontFamily: 'Font Family',
  configTextFontFamilyUpload: 'Select Font File',
  configTextFontFamilyDefault: 'Default Font',
  configTextFontFamilyCustom: 'Custom Font',
  configTextFontSize: 'Font Size',
  configTextFontSizeNum: '{0}',
  configTextLineHeight: 'Line Height',
  configTextLineHeightNum: '{0}',
  configTextParagraphSpacing: 'Paragraph Spacing',
  configTextParagraphSpacingNum: '{0} lines',
  configTextLangTag: 'Language Tag',
  configTextLangTagTitle: 'Lang',
  configTextLangTagDescription: 'This language tag will be used to render text content. This may cause different behavior of line breaking, and Han character rendering.',
  configPreprocessGroupTitle: 'Preprocess',
  configPreprocessMultipleNewLine: 'Max New Lines',
  configPreprocessMultipleNewLineNum: 'Up to {0}',
  configPreprocessMultipleNewLineDisable: 'Not Limited',
  configPreprocessChineseConvert: 'Han Convert',
  configPreprocessChineseConvertS2T: 'Simp. To Trad.',
  configPreprocessChineseConvertT2S: 'Trad. To Simp.',
  configPreprocessChineseConvertDisabled: 'Not Applied',
  configSpeechGroupTitle: 'Speech',
  configSpeechVoice: 'Voice',
  configSpeechVoiceRemote: '(Remote)',
  configSpeechVoiceEmpty: 'No available speech voice detected.',
  configSpeechPitch: 'Speech Pitch',
  configSpeechPitchNum: pitch => {
    if (pitch === 0) return '0 (lowest)';
    if (pitch === 2) return '2 (highest)';
    if (pitch === 1) return '1 (default)';
    else return String(pitch);
  },
  configSpeechRate: 'Speech Rate',
  configSpeechRateNum: rate => {
    if (rate === 1) return '1× (normal)';
    return rate + '×';
  },
  configHelpGroupTitle: 'Help',
  configHelpTopic: 'Help',
  configHelpFilename: 'en.html',
  configHelpCredits: 'Open Source Credits',
  configHelpAbout: 'About',
  configExpertGroupTitle: 'Expert',
  configExpert: 'Expert Config',
  configExpertDescription: "Please leave blank if you don't know what you are doing. Options misconfigured may lead the reader to stop working.",

  buttonRemove: 'Remove',
  buttonBack: 'Back',
  buttonAdd: 'Import File',
  buttonSettings: 'Settings',
  buttonContents: 'Table of Contents',
  buttonBookmark: 'Bookmark',
  buttonSearch: 'Search',
  buttonJump: 'Jump to',
  buttonSpeech: 'Start Text to Speech',
  buttonSpeechStop: 'Stop Text to Speech',
  buttonContentsRefresh: 'Refresh Table of Contents',
  buttonSearchSubmit: 'Search',
  buttonSearchClear: 'Clear Search Result',
  buttonBookmarkAdd: 'Add Bookmark',

  colorHueRange: 'Hue',
  colorSaturationRange: 'Saturation',
  colorValueRange: 'Value',

  readFontFail: 'Cannot open font file. The file format may not be supported by your browser.',
  listImportFail: 'Something wrong when reading text file. Maybe the encoding is not supported.',
  storageOpenFail: 'Cannot access device storage.\ntReader cannot work correctly without storage access.\nThis may due to incognito / private mode of browser or unsupported browser version.',
};
