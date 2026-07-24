(() => {
  const INTERNAL_PAYMENT_PATTERN = /balance\s*payment/i;
  const SOLD_OUT_PATTERN = /^\s*(sold out|out of stock)\s*$/i;

  function hideInternalPaymentCards(root = document) {
    root.querySelectorAll('.card-wrapper.product-card-wrapper, .product-card-wrapper').forEach((card) => {
      const title = card.querySelector('.card__heading a, .full-unstyled-link')?.textContent?.trim() || '';
      if (!INTERNAL_PAYMENT_PATTERN.test(title)) return;

      const container = card.closest('li.grid__item, .grid__item, .product-grid-item, li') || card;
      container.style.display = 'none';
      container.setAttribute('aria-hidden', 'true');
    });
  }

  function replaceSoldOutBadges(root = document) {
    root.querySelectorAll('.badge, [class*="badge"]').forEach((badge) => {
      if (SOLD_OUT_PATTERN.test(badge.textContent || '')) {
        badge.textContent = 'Available by inquiry';
        badge.setAttribute('aria-label', 'Available by inquiry');
      }
    });
  }

  function replaceSoldOutButtons(root = document) {
    root.querySelectorAll('button[disabled], button[data-sold-out-message="true"]').forEach((button) => {
      const text = (button.textContent || '').replace(/\s+/g, ' ').trim();
      if (!/sold out|out of stock/i.test(text)) return;

      const link = document.createElement('a');
      link.href = '/#bulk-inquiry';
      link.className = button.className;
      link.textContent = 'Request Availability';
      link.setAttribute('role', 'button');
      link.setAttribute('aria-label', 'Request availability for this product');
      button.replaceWith(link);
    });
  }

  function processStorefront(root = document) {
    hideInternalPaymentCards(root);
    replaceSoldOutBadges(root);
    replaceSoldOutButtons(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => processStorefront());
  } else {
    processStorefront();
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) processStorefront(node);
      });
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
