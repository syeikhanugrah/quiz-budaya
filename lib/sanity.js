import {
  createClient,
  createImageUrlBuilder,
} from 'next-sanity';

const config = {
  dataset: process.env.SANITY_DATASET || 'production',
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
};

// Set up a helper function for generating Image URLs
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const client = createClient(config);
