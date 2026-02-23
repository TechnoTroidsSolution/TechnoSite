/**
 * Social Media Sharing Utilities
 * Functions to share job postings across different platforms
 */

/**
 * Share job posting on Facebook
 * @param url - The URL of the job posting to share
 */
export const shareOnFacebook = (url: string): void => {
  const encodedUrl = encodeURIComponent(url);
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    '_blank',
    'width=600,height=400'
  );
};

/**
 * Share job posting on Twitter
 * @param url - The URL of the job posting to share
 * @param jobTitle - The title of the job
 */
export const shareOnTwitter = (url: string, jobTitle: string): void => {
  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(`Check out this job opportunity: ${jobTitle} at Techamplers`);
  window.open(
    `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`,
    '_blank',
    'width=600,height=400'
  );
};

/**
 * Share job posting on LinkedIn
 * @param url - The URL of the job posting to share
 */
export const shareOnLinkedIn = (url: string): void => {
  const encodedUrl = encodeURIComponent(url);
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    '_blank',
    'width=600,height=400'
  );
};

/**
 * Copy job posting URL to clipboard
 * @param url - The URL to copy
 * @returns Promise that resolves to true if successful, false otherwise
 */
export const copyToClipboard = async (url: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
};

/**
 * Get current page URL (client-side only)
 * @returns The current page URL or empty string if on server
 */
export const getCurrentUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
};
