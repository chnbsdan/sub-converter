// style.js
export function generateStyles() {
  return `
  :root {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --card-bg: #2c2c2c; /* 改为第一个代码的深色卡片背景 */
    --card-header-bg: linear-gradient(135deg, #1b94cc 0%, #08a363 100%); /* 改为第一个代码的渐变 */
    --btn-primary-bg: linear-gradient(135deg, #1b94cc 0%, #08a363 100%); /* 统一渐变风格 */
    --input-bg: #3c3c3c; /* 改为第一个代码的输入框背景 */
    --input-border: #555555; /* 改为第一个代码的边框颜色 */
    --input-text: #e0e0e0;
    --placeholder-color: #adb5bd; /* 改为第一个代码的占位符颜色 */
    --section-border: rgba(255, 255, 255, 0.1); /* 改为第一个代码的边框透明度 */
    --section-bg: rgba(255, 255, 255, 0.02); /* 改为第一个代码的背景透明度 */
    --select-bg: #3c3c3c; /* 改为第一个代码的选择框背景 */
    --select-text: #e0e0e0;
    --select-border: #555555; /* 改为第一个代码的边框颜色 */
    --dropdown-bg: #2c2c2c; /* 改为第一个代码的下拉背景 */
    --dropdown-text: #e0e0e0;
    --dropdown-hover-bg: #3c3c3c; /* 改为第一个代码的悬停背景 */
    --dropdown-hover-text: #e0e0e0;
    --switch-bg: #555555; /* 改为第一个代码的开关背景 */
    --switch-checked-bg: #4a0e8f; /* 改为第一个代码的选中颜色 */
    --transition-speed: 0.3s;
    --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="light"] {
    --bg-color: #f0f2f5;
    --text-color: #495057;
    --card-bg: #ffffff; /* 改为第一个代码的浅色卡片背景 */
    --card-header-bg: linear-gradient(135deg, #1b94cc 0%, #08a363 100%); /* 保持一致的渐变 */
    --input-bg: #ffffff; /* 改为第一个代码的输入框背景 */
    --input-border: #ced4da; /* 改为第一个代码的边框颜色 */
    --input-text: #495057;
    --placeholder-color: #6c757d; /* 改为第一个代码的占位符颜色 */
    --section-border: rgba(0, 0, 0, 0.1); /* 改为第一个代码的边框透明度 */
    --section-bg: rgba(0, 0, 0, 0.02); /* 改为第一个代码的背景透明度 */
    --select-bg: #ffffff; /* 改为第一个代码的选择框背景 */
    --select-text: #495057;
    --select-border: #ced4da; /* 改为第一个代码的边框颜色 */
    --dropdown-bg: #ffffff; /* 改为第一个代码的下拉背景 */
    --dropdown-text: #495057;
    --dropdown-hover-bg: #f8f9fa; /* 改为第一个代码的悬停背景 */
    --dropdown-hover-text: #495057;
    --switch-bg: #e9ecef; /* 改为第一个代码的开关背景 */
  }

  /* 自定义背景图片 */
  body {
    background-image: url('https://webp.hangdn.com/fg/fg1.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    min-height: 100vh;
    transition: background-color 0.3s var(--transition-timing), color 0.3s var(--transition-timing);
    overflow-x: hidden;
  }

  /* 深色遮罩层，确保文字可读性 */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  .container { 
    max-width: 800px; 
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }

  /* 大卡片效果 - 改为第一个代码的样式 */
  .card {
    background-color: var(--card-bg); /* 使用第一个代码的纯色背景 */
    border: none; /* 改为第一个代码的无边框 */
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* 改为第一个代码的阴影 */
    margin-bottom: 2rem;
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    transition: all 0.3s var(--transition-timing);
    position: relative;
    overflow: hidden;
  }

  /* 移除卡片发光效果 */
  .card::before {
    display: none;
  }

  .card:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* 改为第一个代码的悬停阴影 */
    transform: translateY(-5px);
  }

  .card-header {
    background: var(--card-header-bg);
    color: white;
    border-radius: 15px 15px 0 0;
    padding: 2.5rem 2rem;
    border-bottom: 1px solid var(--section-border);
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    position: relative;
  }

  /* 移除卡片头部的渐变覆盖 */
  .card-header::before {
    display: none;
  }

  .card-body {
    padding: 2rem;
    position: relative;
    z-index: 1;
  }

  /* 表单区域 - 改为第一个代码的样式 */
  .form-section {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--section-border);
    border-radius: 10px;
    background: var(--section-bg);
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    transition: all 0.3s var(--transition-timing);
    position: relative;
  }

  /* 移除表单区域的渐变覆盖 */
  .form-section::before {
    display: none;
  }

  .form-section:hover {
    border-color: var(--section-border); /* 改为第一个代码的边框颜色 */
    box-shadow: none; /* 移除阴影 */
    transform: none; /* 移除悬停动画 */
  }

  .form-section-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  .input-group {
    margin-bottom: 1rem;
  }

  /* 输入框 - 改为第一个代码的样式 */
  .form-control, .form-select {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    color: var(--input-text);
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    position: relative;
  }

  .form-control::placeholder {
    color: var(--placeholder-color);
    opacity: 1;
  }

  .form-control:focus, .form-select:focus {
    border-color: #6a11cb; /* 改为第一个代码的焦点边框颜色 */
    box-shadow: 0 0 0 0.2rem rgba(106, 17, 203, 0.25); /* 改为第一个代码的焦点阴影 */
    background-color: var(--input-bg);
    color: var(--input-text);
    transform: none; /* 移除焦点动画 */
  }

  /* 按钮 - 改为第一个代码的样式 */
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    position: relative;
    overflow: hidden;
  }

  /* 移除按钮的渐变覆盖 */
  .btn::before {
    display: none;
  }

  .btn-primary {
    background: var(--btn-primary-bg);
    border: none;
  }

  .btn-primary:hover {
    transform: none; /* 改为第一个代码的无变换效果 */
    box-shadow: none; /* 移除阴影 */
  }

  .input-group-text {
    background-color: var(--input-bg);
    border-color: var(--input-border);
    color: var(--input-text);
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
  }

  .input-group { 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04); /* 改为第一个代码的阴影 */
  }

  h2, h4 {
    color: var(--text-color);
    font-weight: 600;
  }

  h5 {
    color: var(--text-color);
    font-weight: 500;
  }

  .form-label {
    font-weight: 500;
    color: var(--text-color);
  }

  .btn-outline-secondary {
    color: var(--text-color);
    border-color: var(--input-border);
    background-color: transparent;
  }

  .btn-outline-secondary:hover {
    background-color: var(--input-bg); /* 改为第一个代码的悬停背景 */
    color: var(--text-color);
  }

  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
    color: white;
  }

  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }

  #darkModeToggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    color: var(--text-color);
    background-color: transparent; /* 改为第一个代码的透明背景 */
    border: none; /* 改为第一个代码的无边框 */
    border-radius: 0; /* 改为第一个代码的无圆角 */
    box-shadow: none; /* 移除阴影 */
    padding: 0;
    transition: color 0.3s var(--transition-timing);
  }

  #darkModeToggle:hover {
    transform: none !important; /* 移除悬停动画 */
    background-color: transparent; /* 保持透明 */
    border: none;
  }

  #darkModeToggle i {
    font-size: 1.5rem;
    line-height: 1;
  }

  #darkModeToggle {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .github-link {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    font-size: 2rem;
    color: var(--text-color);
    transition: color 0.3s ease;
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
    background: none; /* 移除背景 */
    border-radius: 0; /* 移除圆角 */
    padding: 0; /* 移除内边距 */
    width: auto; /* 自动宽度 */
    height: auto; /* 自动高度 */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .github-link:hover { 
    color: #136cef; /* 改为第一个代码的悬停颜色 */
    background: none; /* 移除背景 */
    transform: none; /* 移除变换 */
  }
  
  .tooltip-icon {
    cursor: pointer;
    margin-left: 5px;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    vertical-align: super;
    font-size: 1em;
  }

  .question-mark {
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 50%;
    background-color: var(--text-color);
    color: var(--card-bg);
  }

  .tooltip-content {
    visibility: hidden;
    opacity: 0;
    background-color: var(--dropdown-bg);
    color: var(--text-color);
    border: 1px solid var(--input-border);
    border-radius: 6px;
    padding: 10px;
    z-index: 1000;
    width: 180px;
    max-width: 90vw;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 改为第一个代码的阴影 */
    transition: opacity 0.3s, visibility 0.3s;
    backdrop-filter: none; /* 移除毛玻璃效果 */
    -webkit-backdrop-filter: none;
  }

  .tooltip-icon:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .tooltip-content {
      width: 250px;
      left: auto;
      right: 0;
      transform: none;
    }
  }

  .form-check-input {
    background-color: var(--switch-bg);
    border-color: var(--switch-border);
  }

  .form-check-input:checked {
    background-color: var(--switch-checked-bg);
    border-color: var(--switch-checked-bg);
  }

  .form-check-label {
    color: var(--text-color);
  }

  .explanation-text {
    background-color: var(--section-bg);
    color: var(--text-color);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .form-select {
    background-color: var(--select-bg);
    color: var(--select-text);
    border-color: var(--select-border);
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e0e0e0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
    padding-right: 2.5em;
  }

  [data-theme="light"] .form-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23495057' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  }

  .form-select:focus {
    background-color: var(--select-bg);
    color: var(--select-text);
    border-color: var(--checkbox-checked-border);
    box-shadow: 0 0 0 0.2rem rgba(106, 17, 203, 0.25);
  }

  #advancedOptions {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-20px);
    transition: max-height 0.5s var(--transition-timing),
                opacity 0.3s var(--transition-timing),
                transform 0.3s var(--transition-timing);
  }

  #advancedOptions.show {
    max-height: none;
    opacity: 1;
    transform: translateY(0);
    overflow: visible;
  }

  /* Custom Rules Section */
  .custom-rules-section {
    margin-bottom: 1.5rem;
  }

  .custom-rules-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--section-border);
  }

  .custom-rules-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    margin-right: 0.5rem;
  }

  /* Custom Rules Container Styling */
  .custom-rules-container {
    border: 1px solid var(--input-border);
    border-radius: 10px;
    background-color: var(--card-bg);
    overflow: hidden;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  #customRules, #customRulesJSON {
    max-height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1rem;
    background-color: var(--input-bg);
  }

  #customRules:empty, #customRulesJSON:empty {
    padding: 0;
  }

  /* Custom Rules Section Header */
  .custom-rules-section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--section-border);
  }

  .custom-rules-section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    margin-right: 0.75rem;
  }

  /* Custom Rules Tabs */
  .custom-rules-tabs {
    display: flex;
    border-bottom: 2px solid var(--input-border);
    background-color: var(--card-bg);
  }

  .custom-rules-tab {
    flex: 1;
    padding: 0.875rem 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: var(--text-color);
    transition: all 0.3s var(--transition-timing);
    border-bottom: 3px solid transparent;
    font-size: 0.95rem;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .custom-rules-tab:hover {
    background-color: var(--dropdown-hover-bg);
    color: var(--dropdown-hover-text);
  }

  .custom-rules-tab.active {
    color: #6ee7b7;
    border-bottom-color: #6ee7b7;
    background-color: var(--dropdown-hover-bg);
    font-weight: 600;
  }

  /* Dark mode specific adjustments for custom rules tabs */
  [data-theme="dark"] .custom-rules-tab {
    color: var(--text-color);
  }

  [data-theme="dark"] .custom-rules-tab:hover {
    background-color: var(--dropdown-hover-bg);
    color: var(--dropdown-hover-text);
  }

  [data-theme="dark"] .custom-rules-tab.active {
    color: #8a4fff;
    border-bottom-color: #8a4fff;
    background-color: var(--dropdown-hover-bg);
  }

  .custom-rules-content {
    min-height: 200px;
  }

  .custom-rules-view {
    display: none;
  }

  .custom-rules-view.active {
    display: block;
  }

  /* Conversion Controls */
  .conversion-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.875rem;
    background-color: var(--section-bg);
    border-radius: 8px;
    border: 1px solid var(--section-border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .conversion-controls .btn {
    font-size: 0.875rem;
    padding: 0.5rem 0.875rem;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    transition: all 0.3s var(--transition-timing);
  }

  .conversion-controls .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .conversion-controls .btn-outline-primary {
    border-color: #6a11cb;
    color: #6a11cb;
    background-color: transparent;
  }

  .conversion-controls .btn-outline-primary:hover {
    background-color: #6a11cb;
    border-color: #6a11cb;
    color: white;
  }

  .conversion-controls .btn-outline-secondary {
    border-color: var(--input-border);
    color: var(--text-color);
    background-color: transparent;
  }

  .conversion-controls .btn-outline-secondary:hover {
    background-color: var(--dropdown-hover-bg);
    border-color: var(--text-color);
    color: var(--text-color);
  }

  .conversion-controls .btn-outline-info {
    border-color: #17a2b8;
    color: #17a2b8;
    background-color: transparent;
  }

  .conversion-controls .btn-outline-info:hover {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: white;
  }

  .conversion-controls .btn-outline-danger {
    border-color: #dc3545;
    color: #dc3545;
    background-color: transparent;
  }

  .conversion-controls .btn-outline-danger:hover {
    background-color: #dc3545;
    border-color: #dc3545;
    color: white;
  }

  /* Dark mode specific button adjustments */
  [data-theme="dark"] .conversion-controls .btn-outline-primary {
    border-color: #8a4fff;
    color: #8a4fff;
  }

  [data-theme="dark"] .conversion-controls .btn-outline-primary:hover {
    background-color: #8a4fff;
    border-color: #8a4fff;
    color: white;
  }

  [data-theme="dark"] .conversion-controls .btn-outline-secondary {
    border-color: var(--input-border);
    color: var(--text-color);
  }

  [data-theme="dark"] .conversion-controls .btn-outline-secondary:hover {
    background-color: var(--dropdown-hover-bg);
    border-color: var(--text-color);
    color: var(--text-color);
  }

  [data-theme="dark"] .conversion-controls .btn-outline-info {
    border-color: #20c997;
    color: #20c997;
  }

  [data-theme="dark"] .conversion-controls .btn-outline-info:hover {
    background-color: #20c997;
    border-color: #20c997;
    color: white;
  }

  [data-theme="dark"] .conversion-controls .btn-outline-danger {
    border-color: #ff6b6b;
    color: #ff6b6b;
  }

  [data-theme="dark"] .conversion-controls .btn-outline-danger:hover {
    background-color: #ff6b6b;
    border-color: #ff6b6b;
    color: white;
  }

  /* Empty State Messages */
  .empty-state {
    text-align: center;
    padding: 2rem 1rem;
    color: var(--placeholder-color);
    background-color: var(--section-bg);
    border-radius: 8px;
    margin: 1rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .empty-state i {
    color: var(--placeholder-color);
    margin-bottom: 0.75rem;
  }

  .empty-state p {
    margin: 0;
    font-size: 0.95rem;
  }

  /* JSON Validation States */
  .json-valid {
    border-color: #28a745 !important;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;
  }

  .json-invalid {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
  }

  .json-validation-message {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s var(--transition-timing);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .json-validation-message.valid {
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  }

  .json-validation-message.invalid {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  }

  /* Dark mode support for validation messages */
  [data-theme="dark"] .json-validation-message.valid {
    color: #75b798;
    background-color: rgba(40, 167, 69, 0.2);
    border: 1px solid rgba(40, 167, 69, 0.3);
  }

  [data-theme="dark"] .json-validation-message.invalid {
    color: #f1aeb5;
    background-color: rgba(220, 53, 69, 0.2);
    border: 1px solid rgba(220, 53, 69, 0.3);
  }

  .json-textarea-container {
    position: relative;
  }

  /* Custom Rule Cards */
  .custom-rule, .custom-rule-json {
    margin-bottom: 1rem;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    background-color: var(--section-bg);
    transition: all 0.3s var(--transition-timing);
    padding: 1rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .custom-rule:hover, .custom-rule-json:hover {
    border-color: #6a11cb;
    box-shadow: 0 2px 8px rgba(106, 17, 203, 0.1);
  }

  .custom-rule h6, .custom-rule-json h6 {
    color: var(--text-color);
    font-weight: 600;
    margin: 0;
  }

  .custom-rule .form-label, .custom-rule-json .form-label {
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .custom-rule .form-control, .custom-rule-json .form-control {
    background-color: var(--input-bg);
    border-color: var(--input-border);
    color: var(--text-color);
  }

  .custom-rule .form-control:focus, .custom-rule-json .form-control:focus {
    background-color: var(--input-bg);
    border-color: #6a11cb;
    color: var(--text-color);
    box-shadow: 0 0 0 0.2rem rgba(106, 17, 203, 0.25);
  }

  .custom-rule .form-control::placeholder, .custom-rule-json .form-control::placeholder {
    color: var(--placeholder-color);
  }

  /* Dark mode specific adjustments for custom rule cards */
  [data-theme="dark"] .custom-rule:hover,
  [data-theme="dark"] .custom-rule-json:hover {
    border-color: #8a4fff;
    box-shadow: 0 2px 8px rgba(138, 79, 255, 0.2);
  }

  [data-theme="dark"] .custom-rule .form-control:focus,
  [data-theme="dark"] .custom-rule-json .form-control:focus {
    border-color: #8a4fff;
    box-shadow: 0 0 0 0.2rem rgba(138, 79, 255, 0.25);
  }

  .header-container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
  }
  .header-title {
      margin: 0;
      margin-right: 10px;
  }

  .qr-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s var(--transition-timing),
                visibility 0.3s var(--transition-timing);
    z-index: 1000;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .qr-modal.show {
    opacity: 1;
    visibility: visible;
  }

  .qr-card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    text-align: center;
    transform: scale(0.9) translateY(20px);
    transition: transform 0.3s var(--transition-timing);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--input-border);
  }

  .qr-modal.show .qr-card {
    transform: scale(1) translateY(0);
  }

  .qr-card img {
    max-width: 100%;
    height: auto;
  }

  .qr-card p {
    margin-top: 10px;
    color: var(--text-color);
    font-size: 16px;
  }

  .base-url-label {
    background-color: var(--input-bg);
    color: var(--input-text);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  #subscribeLinksContainer {
    max-height: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: max-height 0.5s var(--transition-timing),
                opacity 0.3s var(--transition-timing),
                transform 0.3s var(--transition-timing);
    padding: 1.5rem 1.5rem;
  }

  #subscribeLinksContainer.show {
    max-height: 1000px;
    opacity: 1;
    transform: translateY(0);
  }

  #subscribeLinksContainer.hide {
    max-height: 0;
    opacity: 0;
  }

  #subscribeLinksContainer .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  #subscribeLinksContainer .mt-4 {
    margin-top: 1.5rem !important;
  }

  #subscribeLinksContainer .mt-3 {
    margin-top: 1.25rem !important;
  }

  #subscribeLinksContainer .mb-5 {
    margin-bottom: 1.5rem !important;
  }

  #subscribeLinksContainer .mt-5 {
    margin-top: 1.5rem !important;
  }

  /* Add consistent spacing between link sections */
  #subscribeLinksContainer .input-group {
    margin-bottom: 0.5rem;
    margin-left: 0;
    margin-right: 0;
  }

  #subscribeLinksContainer .form-label {
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: var(--text-color);
  }

  /* Ensure proper spacing for all form elements within the container */
  #subscribeLinksContainer .mb-4 {
    padding-left: 0;
    padding-right: 0;
  }

  /* Ensure all button containers within cards have proper spacing */
  .card-body .d-grid {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }

  /* Form sections should not add extra padding to button containers */
  .form-section .d-flex.gap-2 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Add subtle visual separation between sections */
  #subscribeLinksContainer > div:not(:last-child) {
    border-bottom: 1px solid var(--input-border);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
  }

  /* Remove border from the button container and ensure proper spacing */
  #subscribeLinksContainer .d-grid {
    border-bottom: none !important;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Responsive spacing adjustments */
  @media (max-width: 768px) {
    #subscribeLinksContainer {
      padding: 1rem 1rem !important;
    }

    #subscribeLinksContainer .mb-4 {
      margin-bottom: 1rem !important;
    }

    #subscribeLinksContainer .mt-4 {
      margin-top: 1rem !important;
    }

    #subscribeLinksContainer .mt-3 {
      margin-top: 0.75rem !important;
    }

    #subscribeLinksContainer .mb-5 {
      margin-bottom: 1rem !important;
    }

    #subscribeLinksContainer .mt-5 {
      margin-top: 1rem !important;
    }

    /* Adjust button container spacing for mobile */
    .card-body .d-grid {
      margin-left: 1rem !important;
      margin-right: 1rem !important;
    }

    /* Form sections should not add extra spacing on mobile */
    .form-section .d-flex.gap-2 {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    /* Add horizontal margin to main form button containers on mobile */
    .card-body > form > .d-flex.gap-2.mt-4,
    .card-body .d-flex.gap-2.mt-4 {
      margin-left: 1rem !important;
      margin-right: 1rem !important;
    }

    .card {
      margin: 1rem;
    }
    
    .card-body {
      padding: 1.5rem;
    }
    
    #darkModeToggle {
      top: 10px;
      right: 10px;
    }
    
    .github-link {
      bottom: 10px;
      right: 10px;
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
  }

  .form-select option {
    background-color: var(--dropdown-bg);
    color: var(--dropdown-text);
  }

  .form-select option:hover {
    background-color: var(--dropdown-hover-bg);
    color: var(--dropdown-hover-text);
  }

  .dropdown-menu {
    background-color: var(--dropdown-bg);
    border-color: var(--select-border);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  .dropdown-item {
    color: var(--dropdown-text);
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: var(--dropdown-hover-bg);
    color: var(--dropdown-hover-text);
  }

  /* 通用过渡效果 */
  .card,
  .btn,
  .form-control,
  .form-select,
  .input-group,
  .tooltip-content,
  .github-link,
  .qr-modal,
  .qr-card {
    transition: all var(--transition-speed) var(--transition-timing);
  }

  /* 高级选项展开/收起动画 */
  #advancedOptions {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-20px);
    transition: max-height 0.5s var(--transition-timing),
                opacity 0.3s var(--transition-timing),
                transform 0.3s var(--transition-timing);
  }

  #advancedOptions.show {
    max-height: none;
    opacity: 1;
    transform: translateY(0);
    overflow: visible;
  }

  /* 按钮悬停动画 */
  .btn {
    transform: translateY(0);
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  /* 复制按钮成功动画 */
  @keyframes successPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .btn-success {
    animation: successPulse 0.3s var(--transition-timing);
  }

  /* 自定义规则添加/删除动画 */
  .custom-rule {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.3s var(--transition-timing) forwards;
  }

  .custom-rule.removing {
    animation: slideOut 0.3s var(--transition-timing) forwards;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  /* 暗色模式切换动画 */
  body {
    transition: background-color 0.3s var(--transition-timing),
                color 0.3s var(--transition-timing);
  }

  /* 工具提示动画 */
  .tooltip-content {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.3s var(--transition-timing),
                visibility 0.3s var(--transition-timing),
                transform 0.3s var(--transition-timing);
  }

  .tooltip-icon:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  /* 之前的样式保持不变... */
  
  /* API文档按钮样式 */
  .api-doc-btn {
    color: #0aa26d;
    background: none;
    border: none;
    box-shadow: none;
    font-weight: 600;
    border-radius: 0;
    padding: 0.5rem 1.2rem;
    transition: none;
    position: fixed;
    top: 13px;
    right: 200px;
    z-index: 1001;
    font-size: 1rem;
    text-decoration: none;
  }
  
  .api-doc-btn:hover, .api-doc-btn:focus {
    color: #1f579b !important;
    background: none;
    border: none;
    box-shadow: none;
  }
  
  /* 语言选择器样式 */
  .lang-select-container {
    position: fixed;
    top: 10px;
    right: 70px;
    z-index: 1001;
  }
  
  .lang-select {
    width: 110px;
    height: 45px;
  }
  
  /* 深色模式适配 */
  @media (prefers-color-scheme: dark) {
    .api-doc-btn {
      color: #fff !important;
    }
    .api-doc-btn:hover, .api-doc-btn:focus {
      color: #1f579b !important;
    }
  }
  
  body[data-theme="dark"] .api-doc-btn,
  html[data-theme="dark"] .api-doc-btn {
    color: #fff !important;
  }
  
  body[data-theme="dark"] .api-doc-btn:hover,
  html[data-theme="dark"] .api-doc-btn:hover,
  body[data-theme="dark"] .api-doc-btn:focus,
  html[data-theme="dark"] .api-doc-btn:focus {
    color: #1f579b !important;
  }
  
  /* 移动端适配 */
  @media (max-width: 768px) {
    .api-doc-btn {
      top: 10px;
      right: 160px;
      font-size: 0.9rem;
      padding: 0.4rem 1rem;
    }
    
    .lang-select-container {
      top: 10px;
      right: 60px;
    }
    
    .lang-select {
      width: 100px;
      height: 40px;
    }
  }
  
  @media (max-width: 480px) {
    .api-doc-btn {
      right: 140px;
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
    
    .lang-select-container {
      right: 50px;
    }
    
    .lang-select {
      width: 90px;
      height: 35px;
    }
  }
  
  `;
}
