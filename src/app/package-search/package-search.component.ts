withRefresh = false;
packages$: Observable<NpmPackageInfo[]>;
private searchText$ = new Subject<string>();

search(packageName: string) {
  this.searchText$.next(packageName);
}

ngOnInit() {
  this.packages$ = this.searchText$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(packageName =>
      this.searchService.search(packageName, this.withRefresh))
  );
}

constructor(private searchService: PackageSearchService) { }