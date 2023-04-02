class PageLink {
  constructor(public id: string, public label: string) {}

  public getHashId() {
    return '#' + this.id;
  }

  public getHref() {
    return '/' + this.getHashId();
  }
}

export const pageLinks = {
  landing: new PageLink('landing', 'Landing'),
  about: new PageLink('about', 'About'),
  experiences: new PageLink('experiences', 'Experiences'),
  featured: new PageLink('featured', 'Featured'),
  other: new PageLink('other', 'Other'),
};
