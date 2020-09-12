(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["egf-egf-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/faq/faq.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/faq/faq.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">FAQs</div>\n    <p class=\"content-sub-header\">We're here to help</p>\n  </div>\n</div>\n<!-- faq starts -->\n<section id=\"faq\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card gradient-purple-bliss white text-center p-4\">\n        <div class=\"card-header\">\n          <h1>We're here to help!!</h1>\n          <p><em>If you have any question you can ask below or enter what you are looking for!</em></p>\n        </div>\n        <div class=\"card-body\">\n          <fieldset class=\"form-group col-xl-12 col-lg-10 col-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search in faqs..\" (input)=\"filter($event.target.value)\"\n              #messageInput>\n          </fieldset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card text-truncate\">\n        <div class=\"card-body\">\n          <ngb-accordion [closeOthers]=\"true\">\n            <ngb-panel [id]=\"faq.faqId\" *ngFor=\"let faq of faqs\">\n              <ng-template ngbPanelTitle>\n                <h5 class=\"mb-0\"><i class=\"icon-question mr-2\"></i> <span> {{faq.title}}</span></h5>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <div >\n                  {{faq.content}}\n                </div>\n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- faq Ends -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/gallery/gallery-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/gallery/gallery-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery Hover Effect Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">Hover Effects</div>\n        <p class=\"content-sub-header\">Image gallery grid with 30 subtle hover effect. Try to hover below demo images to show each hover effect.</p>\n    </div>\n</div>\n<section id=\"hover-effects\" class=\"card\">\n  <div class=\"card-content\">\n    <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Lily</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lily\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <div>\n                  <h2>Nice\n                    <span>Lily</span>\n                  </h2>\n                  <p>Lily likes to play with crayons and pencils</p>\n                </div>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lily\">\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img1\" />\n              <figcaption>\n                <div>\n                  <h2>Nice\n                    <span>Lily</span>\n                  </h2>\n                  <p>Lily likes to play with crayons and pencils</p>\n                </div>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Sadie</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sadie\">\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2>Holy\n                  <span>Sadie</span>\n                </h2>\n                <p>Sadie never took her eyes off me.\n                  <br>She had a dark soul.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sadie\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2>Holy\n                  <span>Sadie</span>\n                </h2>\n                <p>Sadie never took her eyes off me.\n                  <br>She had a dark soul.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Honey</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-honey\">\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2>Dreamy\n                  <span>Honey</span> <i>Now</i></h2>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-honey\">\n              <img src=\"assets/img/gallery/5.jpg\" alt=\"img05\" />\n              <figcaption>\n                <h2>Dreamy\n                  <span>Honey</span> <i>Now</i></h2>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Layla</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-layla\">\n              <img src=\"assets/img/gallery/6.jpg\" alt=\"img06\" />\n              <figcaption>\n                <h2>Crazy\n                  <span>Layla</span>\n                </h2>\n                <p>When Layla appears, she brings an eternal summer along.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-layla\">\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2>Crazy\n                  <span>Layla</span>\n                </h2>\n                <p>When Layla appears, she brings an eternal summer along.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Zoe</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-zoe\">\n              <img src=\"assets/img/gallery/25.jpg\" alt=\"img25\" />\n              <figcaption>\n                <h2>Creative\n                  <span>Zoe</span>\n                </h2>\n                <p class=\"icon-links\">\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\n                </p>\n                <p class=\"description\">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-zoe\">\n              <img src=\"assets/img/gallery/26.jpg\" alt=\"img26\" />\n              <figcaption>\n                <h2>Creative\n                  <span>Zoe</span>\n                </h2>\n                <p class=\"icon-links\">\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\n                </p>\n                <p class=\"description\">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Oscar</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-oscar\">\n              <img src=\"assets/img/gallery/9.jpg\" alt=\"img09\" />\n              <figcaption>\n                <h2>Warm\n                  <span>Oscar</span>\n                </h2>\n                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-oscar\">\n              <img src=\"assets/img/gallery/10.jpg\" alt=\"img10\" />\n              <figcaption>\n                <h2>Warm\n                  <span>Oscar</span>\n                </h2>\n                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Marley</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-marley\">\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2>Sweet\n                  <span>Marley</span>\n                </h2>\n                <p>Marley tried to convince her but she was not interested.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-marley\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2>Sweet\n                  <span>Marley</span>\n                </h2>\n                <p>Marley tried to convince her but she was not interested.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Ruby</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ruby\">\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2>Glowing\n                  <span>Ruby</span>\n                </h2>\n                <p>Ruby did not need any help. Everybody knew that.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ruby\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2>Glowing\n                  <span>Ruby</span>\n                </h2>\n                <p>Ruby did not need any help. Everybody knew that.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Roxy</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-roxy\">\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2>Charming\n                  <span>Roxy</span>\n                </h2>\n                <p>Roxy was my best friend. She'd cross any border for me.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-roxy\">\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img01\" />\n              <figcaption>\n                <h2>Charming\n                  <span>Roxy</span>\n                </h2>\n                <p>Roxy was my best friend. She'd cross any border for me.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Bubba</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-bubba\">\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2>Fresh\n                  <span>Bubba</span>\n                </h2>\n                <p>Bubba likes to appear out of thin air.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-bubba\">\n              <img src=\"assets/img/gallery/16.jpg\" alt=\"img16\" />\n              <figcaption>\n                <h2>Fresh\n                  <span>Bubba</span>\n                </h2>\n                <p>Bubba likes to appear out of thin air.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Romeo</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-romeo\">\n              <img src=\"assets/img/gallery/17.jpg\" alt=\"img17\" />\n              <figcaption>\n                <h2>Wild\n                  <span>Romeo</span>\n                </h2>\n                <p>Romeo never knows what he wants. He seemed to be very cross about something.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-romeo\">\n              <img src=\"assets/img/gallery/18.jpg\" alt=\"img18\" />\n              <figcaption>\n                <h2>Wild\n                  <span>Romeo</span>\n                </h2>\n                <p>Romeo never knows what he wants. He seemed to be very cross about something.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Dexter</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-dexter\">\n              <img src=\"assets/img/gallery/19.jpg\" alt=\"img19\" />\n              <figcaption>\n                <h2>Strange\n                  <span>Dexter</span>\n                </h2>\n                <p>Dexter had his own strange way. You could watch him training ants.\n                </p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-dexter\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2>Strange\n                  <span>Dexter</span>\n                </h2>\n                <p>Dexter had his own strange way. You could watch him training ants.\n                </p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Sarah</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sarah\">\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2>Free\n                  <span>Sarah</span>\n                </h2>\n                <p>Sarah likes to watch clouds. She's quite depressed.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sarah\">\n              <img src=\"assets/img/gallery/20.jpg\" alt=\"img20\" />\n              <figcaption>\n                <h2>Free\n                  <span>Sarah</span>\n                </h2>\n                <p>Sarah likes to watch clouds. She's quite depressed.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Chico</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-chico\">\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2>Silly\n                  <span>Chico</span>\n                </h2>\n                <p>Chico's main fear was missing the morning bus.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-chico\">\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2>Silly\n                  <span>Chico</span>\n                </h2>\n                <p>Chico's main fear was missing the morning bus.</p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Milo</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-milo\">\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2>Faithful\n                  <span>Milo</span>\n                </h2>\n                <p>Milo went to the woods. He took a fun ride and never came back.\n                </p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-milo\">\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2>Faithful\n                  <span>Milo</span>\n                </h2>\n                <p>Milo went to the woods. He took a fun ride and never came back.\n                </p>\n                <a>View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Gallery Hover Effect Starts-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/invoice/invoice-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/invoice/invoice-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Invoice template starts-->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4>Invoice</h4>\n  </div>\n</div>\n<section class=\"invoice-template\">\n  <div class=\"card\">\n    <div class=\"card-body p-3\">\n      <div id=\"invoice-template\" class=\"card-block\">\n        <!-- Invoice Company Details -->\n        <div id=\"invoice-company-details\" class=\"row\">\n          <div class=\"col-md-6 col-sm-12 text-center text-md-left\">\n            <img src=\"assets/img/logos/logo-big-black.png\" alt=\"company logo\" class=\"mb-2\" width=\"80\" height=\"80\">\n            <ul class=\"px-0 list-unstyled\">\n              <li class=\"text-bold-800\">Pixinvent Creative Studio</li>\n              <li>4025 Oak Avenue,</li>\n              <li>Melbourne,</li>\n              <li>Florida 32940,</li>\n              <li>USA</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\n            <h2>INVOICE</h2>\n            <p class=\"pb-3\"># INV-001001</p>\n            <ul class=\"px-0 list-unstyled\">\n              <li>Balance Due</li>\n              <li class=\"lead text-bold-800\">$ 12,000.00</li>\n            </ul>\n          </div>\n        </div>\n        <!--/ Invoice Company Details -->\n        <!-- Invoice Customer Details -->\n        <div id=\"invoice-customer-details\" class=\"row pt-2\">\n          <div class=\"col-sm-12 text-left\">\n            <p class=\"text-muted\">Bill To</p>\n          </div>\n          <div class=\"col-md-6 col-sm-12  text-center text-md-left\">\n            <ul class=\"px-0 list-unstyled\">\n              <li class=\"text-bold-800\">Mr. Bret Lezama</li>\n              <li>4879 Westfall Avenue,</li>\n              <li>Albuquerque,</li>\n              <li>New Mexico-87102.</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\n            <p><span class=\"text-muted\">Invoice Date :</span> 06/05/2016</p>\n            <p><span class=\"text-muted\">Terms :</span> Due on Receipt</p>\n            <p><span class=\"text-muted\">Due Date :</span> 10/05/2016</p>\n          </div>\n        </div>\n        <!--/ Invoice Customer Details -->\n        <!-- Invoice Items Details -->\n        <div id=\"invoice-items-details\" class=\"pt-2\">\n          <div class=\"row\">\n            <div class=\"table-responsive col-sm-12\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Item &amp; Description</th>\n                    <th class=\"text-right\">Rate</th>\n                    <th class=\"text-right\">Hours</th>\n                    <th class=\"text-right\">Amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">1</th>\n                    <td>\n                      <p>Create PSD for mobile APP</p>\n                      <p class=\"text-muted\">Simply dummy text of the printing and typesetting industry.</p>\n                    </td>\n                    <td class=\"text-right\">$ 20.00/hr</td>\n                    <td class=\"text-right\">120</td>\n                    <td class=\"text-right\">$ 2400.00</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">2</th>\n                    <td>\n                      <p>iOS Application Development</p>\n                      <p class=\"text-muted\">Pellentesque maximus feugiat lorem at cursus.</p>\n                    </td>\n                    <td class=\"text-right\">$ 25.00/hr</td>\n                    <td class=\"text-right\">260</td>\n                    <td class=\"text-right\">$ 6500.00</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">3</th>\n                    <td>\n                      <p>WordPress Template Development</p>\n                      <p class=\"text-muted\">Vestibulum euismod est eu elit convallis.</p>\n                    </td>\n                    <td class=\"text-right\">$ 20.00/hr</td>\n                    <td class=\"text-right\">300</td>\n                    <td class=\"text-right\">$ 6000.00</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 text-left\">\n              <p class=\"lead\">Payment Methods:</p>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <table class=\"table table-borderless table-sm\">\n                    <tbody>\n                      <tr>\n                        <td>Bank name:</td>\n                        <td class=\"text-right\">ABC Bank, USA</td>\n                      </tr>\n                      <tr>\n                        <td>Acc name:</td>\n                        <td class=\"text-right\">Amanda Orton</td>\n                      </tr>\n                      <tr>\n                        <td>IBAN:</td>\n                        <td class=\"text-right\">FGS165461646546AA</td>\n                      </tr>\n                      <tr>\n                        <td>SWIFT code:</td>\n                        <td class=\"text-right\">BTNPP34</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n              <p class=\"lead\">Total due</p>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>Sub Total</td>\n                      <td class=\"text-right\">$ 14,900.00</td>\n                    </tr>\n                    <tr>\n                      <td>TAX (12%)</td>\n                      <td class=\"text-right\">$ 1,788.00</td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-bold-800\">Total</td>\n                      <td class=\"text-bold-800 text-right\"> $ 16,688.00</td>\n                    </tr>\n                    <tr>\n                      <td>Payment Made</td>\n                      <td class=\"pink text-right\">(-) $ 4,688.00</td>\n                    </tr>\n                    <tr class=\"bg-grey bg-lighten-4\">\n                      <td class=\"text-bold-800\">Balance Due</td>\n                      <td class=\"text-bold-800 text-right\">$ 12,000.00</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"text-center\">\n                <p>Authorized person</p>\n                <img src=\"assets/img/pages/signature-scan.png\" alt=\"signature\" class=\"width-250\">\n                <h6>Amanda Orton</h6>\n                <p class=\"text-muted\">Managing Director</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Invoice Footer -->\n        <div id=\"invoice-footer\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-sm-12\">\n              <h6>Terms &amp; Condition</h6>\n              <p>You know, being a test pilot isn't always the healthiest business in the world. We predict too\n                much for the next year and yet far too little for the next 10.</p>\n            </div>\n            <div class=\"col-md-3 col-sm-12 text-center\">\n              <button type=\"button\" class=\"btn btn-primary btn-raised my-1\"><i class=\"fa fa-paper-plane-o\"></i> Send\n                Invoice</button>\n            </div>\n          </div>\n        </div>\n        <!--/ Invoice Footer -->\n      </div>\n    </div>\n  </div>\n</section>\n<!--Invoice template ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/knowledge-base/knowledge-base.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/knowledge-base/knowledge-base.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">Knowledge Base</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Apex template Knowledge Base starts -->\n<section id=\"kb\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-bell font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title mb-0\">Getting Started</h4>\n          <p class=\"card-text\">Vestibulum consequat.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Activating an Account and Logging in')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Activating an Account\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Transporteur Profile')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Transporteur Profile\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using the Dashboard')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Using the Dashboard\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Subscribing to Email Alerts')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Subscribing to Email Alerts\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Changing a Password')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Changing a Password\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (20)</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-book font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">Transporteur Guides</h4>\n          <p class=\"card-text\">Vestibulum consequat.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Files Overview')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Files Overview\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Search Overview')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Search Overview\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using Tasks')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Using Tasks\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Events')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Events\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Blogs')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Blogs\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (13)</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-file-text text-white font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">Files</h4>\n          <p class=\"card-text\">Vestibulum amet eros.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Basic Files Module Features')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Basic Files Module Features\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Add a Single File')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> How to Add a Single File\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Drag-and-Drop upload files and folders')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Drag-and-Drop\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Searching Files')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Searching Files\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Digital Rights Management')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Digital Rights Management\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (7)</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-user font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">Managing Users</h4>\n          <p class=\"card-text\">Vestibulum consequat.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Inviting and Managing Users')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Inviting and Managing Users\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating and Managing Groups')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Creating and Managing Groups\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Granting Roles')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Granting Roles\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Quick Guide: Organizing Security Groups')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Quick Guide: Groups\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'What to Do if a Transporteur is Unable to Login')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> What to Do to Login\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (11)</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-unlock font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">Site Administration</h4>\n          <p class=\"card-text\">Vestibulum consequat.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Introduction to the Site Admin Module')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Introduction to Module\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Create a Virtual Deal Room')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> How to Create a Virtual Room\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Best Practices for Setting up a New Site')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Best Practices for New Site\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'General Settings')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> General Settings\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Advanced Settings')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Advanced Settings\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (21)</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-airplay font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">System Administration</h4>\n          <p class=\"card-text\">Vestibulum consequat.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'System Administration Overview')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>Overview\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating Sites')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Creating Sites\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Transporteur Administration')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Transporteur Administration\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Org Administration')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Org Administration\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Site Category System Settings')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> Site Category System Settings\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">See all articles (17)</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Apex template Knowledge Base Ends -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header bg-info\">\n      <h4 class=\"modal-title white\">{{title}}</h4>\n      <button type=\"button\" class=\"close white\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" id=\"kbModal-body\">\n      <p class=\"text-bold-500\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      <p>Curabitur et congue orci. Nullam tempor, lectus vitae facilisis consectetur, enim dolor sodales nunc, ut\n        venenatis\n        ipsum massa non eros. Integer tristique consequat sagittis. Sed vitae sapien lobortis, viverra turpis non,\n        hendrerit\n        erat. Vivamus luctus, nisl et dignissim pretium, quam risus sollicitudin augue, ut mollis erat neque a lectus.\n        Donec\n        et ex vitae orci pretium volutpat eget sed est. Nunc ornare mauris nunc, id ullamcorper libero finibus id.\n        Fusce\n        imperdiet laoreet suscipit. Nunc sagittis arcu non sem euismod auctor. Sed tellus odio, posuere id molestie\n        quis,\n        egestas sit amet turpis. Duis velit diam, dictum a semper eu, ultricies id neque. Integer nec eros placerat\n        lacus\n        bibendum viverra in eu urna.</p>\n      <p class=\"text-bold-500\">Suspendisse auctor nisl interdum arcu blandit, sed aliquam leo volutpat.</p>\n      <p>Donec laoreet in nibh vel maximus. Donec posuere aliquam lacus a congue. Interdum et malesuada fames ac ante\n        ipsum\n        primis in faucibus. Aenean semper fringilla arcu, non auctor ante. Ut efficitur euismod scelerisque. Cras\n        accumsan\n        orci rhoncus elementum auctor. Phasellus maximus volutpat nunc ut tincidunt. Lorem ipsum dolor sit amet,\n        consectetur\n        adipiscing elit. Pellentesque aliquet tincidunt neque, et volutpat est dictum non. Nulla hendrerit leo sit amet\n        nisl\n        blandit, quis pharetra lacus ultrices. Etiam pretium ipsum eu dui consectetur maximus. Vivamus pretium luctus\n        lorem,\n        eu viverra velit malesuada at. Nam risus orci, gravida ut convallis et, cursus id velit.</p>\n      <p class=\"text-bold-500\"> Phasellus maximus volutpat nunc ut tincidunt.</p>\n      <p>Donec laoreet in nibh vel maximus. Donec posuere aliquam lacus a congue. Interdum et malesuada fames ac ante\n        ipsum\n        primis in faucibus. Aenean semper fringilla arcu, non auctor ante. Ut efficitur euismod scelerisque. Cras\n        accumsan\n        orci rhoncus elementum auctor. Phasellus maximus volutpat nunc ut tincidunt. Lorem ipsum dolor sit amet,\n        consectetur\n        adipiscing elit. Pellentesque aliquet tincidunt neque, et volutpat est dictum non. Nulla hendrerit leo sit amet\n        nisl\n        blandit, quis pharetra lacus ultrices. Etiam pretium ipsum eu dui consectetur maximus. Vivamus pretium luctus\n        lorem,\n        eu viverra velit malesuada at. Nam risus orci, gravida ut convallis et, cursus id velit.</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/search/search.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/search/search.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search form-->\n<section id=\"search-website\" class=\"card overflow-hidden\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">Website search results</h4>\n\n  </div>\n  <div class=\"card-content\">\n    <div class=\"card-body pb-0\">\n      <form action=\"#\">\n        <fieldset class=\"form-group position-relative has-icon-right mb-0\">\n          <input type=\"text\" class=\"form-control form-control-lg \" id=\"iconLeft\" placeholder=\"Apex Admin Template\">\n          <div class=\"form-control-position\">\n            <i class=\"ft-mic font-medium-4\"></i>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n    <!--Search Navbar-->\n    <div id=\"search-nav\" class=\"card-body\">\n      <ul class=\"nav nav-inline\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\"><i class=\"fa fa-link\"></i> Website</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"><i class=\"fa fa-file-image-o\"></i> Images</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"><i class=\"fa fa-file-video-o\"></i> Videos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"><i class=\"fa fa-map-o\"></i> Maps</a>\n        </li>\n        <li class=\"dropdown nav-item float-right mt-1\">\n          <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i> <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu dropdown-menu-right\">\n            <li class=\"dropdown-item\"><a class=\"dropdown-link\">Languages</a></li>\n            <li class=\"dropdown-item\"><a class=\"dropdown-link\">Search Settings</a></li>\n            <li class=\"dropdown-item\"><a class=\"dropdown-link\">History</a></li>\n            <li class=\"dropdown-item\"><a class=\"dropdown-link\">Search Help</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <!--/ Search Navbar-->\n    <!--Search Result-->\n    <div id=\"search-results\" class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <p class=\"text-muted font-small-3\">About 68,00,000 results (0.58 seconds) </p>\n          <ul class=\"media-list row\">\n            <!--search with list-->\n            <li class=\"media\">\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a><span class=\"text-bold-600\">Apex</span> - Responsive Angular 5 Admin Template</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <ul class=\"list-inline list-inline-pipe text-muted\">\n                  <li>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i> &nbsp;5 stars\n                  </li>\n                  <li>590 votes</li>\n                  <li>US$ 28.00</li>\n                  <li>In stock</li>\n                </ul>\n                <p><span class=\"text-muted\">Oct 24, 2017 - </span><span class=\"text-bold-600\">Apex</span> nec nisl\n                  lobortis erat rutrum dignissim. Colonel <span class=\"text-bold-600\">Responsive Angular 5 Admin\n                    Template</span> Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur\n                  purus quis viverra...</p>\n                <div class=\"website-detailed-list mx-1 my-1\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">Dashboard</a></p>\n                          <p>Donec vitae ante ipsum. In aliquet, urna id varius mattis...</p>\n                        </div>\n                      </div>\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">Form Components</a></p>\n                          <p>Velit mi sodales turpis, nec consectetur leo elit.</p>\n                        </div>\n                      </div>\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">Charts</a></p>\n                          <p>Vestibulum nec orci placerat, euismod turpis egestas...</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">UI Components</a></p>\n                          <p>Nam in velit iaculis, vestibulum ex a, porta sapien...</p>\n                        </div>\n                      </div>\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">Support</a></p>\n                          <p>Donec ullamcorper est vel dui commodo dictum.</p>\n                        </div>\n                      </div>\n                      <div class=\"content-group\">\n                        <div class=\"media-body\">\n                          <p class=\"mb-0\"><a class=\"teal darken-1\">Documentation</a></p>\n                          <p>Ut rhoncus massa diam, in commodo enim posuere quis mosito...</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!--search with image-->\n            <li class=\"media flex-column\">\n              <div class=\"media-left\">\n                <a>\n                  <img class=\"media-object width-150\" src=\"assets/img/width-600/portfolio-14.jpg\" alt=\"Generic placeholder image\">\n                </a>\n              </div>\n              <div class=\"media-body media-search\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">Attire bench</span> - Quick\n                    win shoot me an email</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <ul class=\"list-inline list-inline-pipe text-muted\">\n                  <li>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star-half yellow darken-2\"></i> &nbsp;4.5 stars\n                  </li>\n                  <li>50 votes</li>\n                  <li>US$ 40.00</li>\n                  <li>In stock</li>\n                </ul>\n                <p><span class=\"text-muted\">Oct 24, 2017 - </span> We need to dialog around <span class=\"text-bold-600\">Apex\n                    Admin</span> your choice of work attire bench mark, or win-win-win. Quick win shoot me an email.\n                  Proceduralize i don't want to drain the whole swamp, i just want to shoot some alligators yet old\n                  boys club.</p>\n              </div>\n            </li>\n            <!--search with video-->\n            <li class=\"media flex-column\">\n              <div class=\"media-left media-search\">\n                <iframe width=\"150\" height=\"110\" src=\"https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&amp;controls=0&amp;showinfo=0\"></iframe>\n              </div>\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">The Table</span> - for what\n                    do you feel you would bring to</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">http://youtube.com/<span class=\"text-bold-600\">Apex</span>/ <i\n                      class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <ul class=\"list-inline list-inline-pipe text-muted\">\n                  <li>Oct 24, 2017</li>\n                  <li>1M Views</li>\n                  <li>Uploaded by PlayStation</li>\n                </ul>\n                <p><span class=\"text-bold-600\">Proceduralize</span> Not the long pole in my tent. Get buy-in pixel\n                  pushing, and quick win . What's the status on the deliverables for eow? goalposts golden goose, and\n                  take five.</p>\n              </div>\n            </li>\n            <li class=\"media\">\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">Microdosing</span> - deep v\n                    actually schlitz chia</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">http://themeforest.net/<span class=\"text-bold-600\">Apex</span>/microdosing\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <p>Lobortis erat rutrum dignissim. Colonel <span class=\"text-bold-600\">Responsive Angular 5 Admin\n                    Template</span> Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur\n                  purus quis viverra. Vivamus eros urna, scelerisque ac enim...</p>\n              </div>\n            </li>\n            <li class=\"media\">\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\">Aesthetic neutra <span class=\"text-bold-600\">freegan</span>,\n                    mlkshk literally</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">http://envato.com/literally/<span class=\"text-bold-600\">Apex</span>/\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <p><span class=\"text-muted\">June 30, 2016 - </span><span class=\"text-bold-600\">Humblebrag</span>\n                  mixtape tumblr small batch, marfa blog mumblecore retro sustainable bitters normcore brunch whatever\n                  helvetica. <span class=\"text-bold-600\">Humblebrag mumblecore </span>beard irony, XOXO craft beer kogi\n                  letterpress freegan vegan disrupt...</p>\n              </div>\n            </li>\n            <li class=\"media\">\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">iCell</span> - disrupt\n                    butcher pitchfork.</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">http://google.com/<span class=\"text-bold-600\">icell</span>/ <i\n                      class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <ul class=\"list-inline list-inline-pipe text-muted\">\n                  <li>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star yellow darken-2\"></i>\n                    <i class=\"fa fa-star-half yellow darken-2\"></i>\n                    <i class=\"fa fa-star-outline yellow darken-2\"></i>\n                    <i class=\"fa fa-star-outline yellow darken-2\"></i> &nbsp;2.5 stars\n                  </li>\n                  <li>590 votes</li>\n                  <li>US$ 399.00</li>\n                  <li>In stock</li>\n                </ul>\n                <p><span class=\"text-muted\">March 23, 2016 - </span>Church-key selfies bitters man bun post-ironic.\n                  <span class=\"text-bold-600\">8-bit 3 wolf moon</span> drinking vinegar, direct trade plaid cred\n                  hashtag offal. Fap XOXO chambray, intelligentsia kogi keytar flexitarian cardigan kale chips food\n                  truck.</p>\n              </div>\n            </li>\n            <li class=\"media\">\n              <div class=\"media-body\">\n                <p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">Run it</span> - up the\n                    flagpole, ping the boss</a></p>\n                <p class=\"mb-0\"><a class=\"teal darken-1\">http://mail.example.com/<span class=\"text-bold-600\">run</span>/\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                <p>Pixel pushing horsehead offer that jerk from finance really threw me under the bus, but best\n                  practices new economy and take five, punch the tree, and come back in here with a clear head...</p>\n              </div>\n            </li>\n          </ul>\n          <div class=\"text-center\">\n            <nav aria-label=\"Page navigation\">\n              <ul class=\"pagination pagination-separate pagination-round pagination-flat\">\n                <li class=\"page-item\">\n                  <a class=\"page-link\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">« Prev</span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n                <li class=\"page-item\"><a class=\"page-link\">2</a></li>\n                <li class=\"page-item active\"><a class=\"page-link\">3</a></li>\n                <li class=\"page-item\"><a class=\"page-link\">4</a></li>\n                <li class=\"page-item\"><a class=\"page-link\">5</a></li>\n                <li class=\"page-item\">\n                  <a class=\"page-link\" aria-label=\"Next\">\n                    <span aria-hidden=\"true\">Next »</span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Apex</h4>\n              <h6 class=\"card-subtitle text-muted\">Responsive Angular 5 Admin Template</h6>\n            </div>\n            <img class=\"img-fluid\" src=\"assets/img/width-600/portfolio-3.jpg\" alt=\"logo\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                card's content.<a>Wikipedia</a></p>\n              <ul class=\"list-group mb-2\">\n                <li class=\"list-group-item\"><strong>Website :</strong> <a class=\"card-link\">https://pixinvent.com/</a></li>\n                <li class=\"list-group-item\"><strong>Customer service :</strong> 022 8888 9999</li>\n                <li class=\"list-group-item\"><strong>Founder :</strong> PIXINVENT</li>\n                <li class=\"list-group-item\"><strong>Founded :</strong> 2017</li>\n                <li class=\"list-group-item\"><strong>Support:</strong> <a>support@pixinvent.com</a></li>\n              </ul>\n              <div class=\"py-1 text-center\">\n                <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\n                <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\n                <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\"><span class=\"fa fa-linkedin font-medium-4\"></span></a>\n                <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\"><span class=\"fa fa-github font-medium-4\"></span></a>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"text-bold-600\">People also search for</p>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/11.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">Ashoka</a>\n                </div>\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/12.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">Materialize</a>\n                </div>\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/13.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">HTML </a>\n                </div>\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/14.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">Ashoka</a>\n                </div>\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/25.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">Materialize</a>\n                </div>\n                <div class=\"col-md-4\">\n                  <img class=\"img-fluid rounded\" src=\"assets/img/gallery/23.jpg\" alt=\"Image description\">\n                  <a class=\"font-small-2\">HTML </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Search form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cd-horizontal-timeline\" [ngClass]=\"{'loaded': loaded}\">\n  <div class=\"timeline\">\n    <div class=\"events-wrapper\">\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\n        <ol>\n          <li *ngFor=\"let item of timelineElements; let index = index\">\n            <a #timelineEvents href=\"#\" [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\"\n              (click)=\"onEventClick($event, item)\">{{item.date | date:dateFormatTop}}</a>\n            <span></span>\n          </li>\n        </ol>\n        <span class=\"filling-line\" aria-hidden=\"true\" #fillingLine></span>\n      </div>\n    </div>\n\n    <ul class=\"cd-timeline-navigation\">\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\">Prev</a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\">Next</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"events-content\" *ngIf=\"showContent\">\n    <ol>\n      <li *ngFor=\"let item of timelineElements; let index = index\" [@contentState]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\">\n        <h2 class=\"text-bold-500\">{{item.title}}</h2>\n        <em>{{item.date | date:dateFormat}}</em>\n        <p>{{item.content}}</p>\n      </li>\n    </ol>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Horizontal Timeline Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">Horizontal Timeline</div>\n        <p class=\"content-sub-header\">This horizontal timeline contain date based post timeline.</p>\n    </div>\n</div>\n<div class=\"card\">\n\t<div class=\"card-content\">\n\t\t<div class=\"card-body\">\n\t\t\t<horizontal-timeline [timelineElements]=\"timeline\" [showContent]=\"true\"></horizontal-timeline>\n\t\t</div>\n\t</div>\n</div>\n<!--Horizontal Timeline Starts-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/vertical/vertical-timeline-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/egf/timeline/vertical/vertical-timeline-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Vertical Timeline Starts-->\n<section id=\"timeline\" class=\"timeline-center timeline-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Vertical Timeline</div>\n      <p class=\"content-sub-header\">This vertical timeline contain post with photos, videos, charts and map to make timeline more effective.</p>\n    </div>\n  </div>\n  <h3 class=\"page-title text-center\">Timeline</h3>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> Today</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>Portfolio project work</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">5 hours ago</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/01.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula.\n                Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> Like</a>\n                </span>\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Comment</a>\n                </span>\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> Share</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <div class=\"media\">\n                <div class=\"media-left\">\n                  <a>\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-1.png\" alt=\"avatar\" width=\"50\"></span>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"text-bold-600 mb-0\"><a>Jason Ansley</a></p>\n                  <p class=\"m-0\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>\n                  <div class=\"list-inline mb-1\">\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> Like</a>\n                    </span>\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Replay</a>\n                    </span>\n                  </div>\n                  <div class=\"media\">\n                    <div class=\"media-left\">\n                      <a>\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                      <p class=\"text-bold-600 mb-0\"><a>Janice Johnston</a></p>\n                      <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>\n                      <div class=\"list-inline mb-1\">\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> Like</a>\n                        </span>\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Replay</a>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"avatar\" width=\"40\"></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>Sofia Orav</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">8 hours ago</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n            <iframe src=\"https://player.vimeo.com/video/118589137?title=0&byline=0\"></iframe>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula.\n                Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\n              <p class=\"card-text\">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut\n                nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing\n                montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> Like</a>\n                </span>\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Comment</a>\n                </span>\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> Share</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p><i class=\"fa fa-bar-chart font-medium-4\"></i></p>\n            <h4>Campaign Report</h4>\n            <p class=\"timeline-date\">18 hours ago</p>\n            <p>Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing\n              non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"chart-container\">\n              <div id=\"stacked-column\" class=\"height-400 echart-container overflow-hidden lineArea1\">\n                <x-chartist class=\"\" [data]=\"lineArea1.data\" [type]=\"lineArea1.type\" [options]=\"lineArea1.options\" [responsiveOptions]=\"lineArea1.responsiveOptions\"\n                  [events]=\"lineArea1.events\">\n                </x-chartist>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <!-- 2016 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 2016</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\n      </div>\n      <div class=\"timeline-card card card-inverse\">\n        <img class=\"card-img img-fluid\" src=\"assets/img/photos/02.jpg\" alt=\"Card image\">\n        <div class=\"card-img-overlay bg-overlay\">\n          <h4 class=\"card-title\">Good Morning</h4>\n          <p class=\"card-text\"><small>26 Aug, 2016 at 2.00 A.M</small></p>\n        </div>\n      </div>\n    </li>\n\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-teal bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Nullam facilisis fermentum\"><i class=\"fa fa-check-square-o\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"mb-0 card-title\"><a>Sofia Orav</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">18 June, 2016 at 4.50 P.M</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula.\n                Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\n              <ul class=\"list-group icheck-task\">\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"1st-item\">\n                    <label class=\"custom-control-label\" for=\"1st-item\">Cras justo odio</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"2nd-item\">\n                    <label class=\"custom-control-label\" for=\"2nd-item\">checked Dapibus ac facilisis in</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"3rd-item\">\n                    <label class=\"custom-control-label\" for=\"3rd-item\">Morbi leo risus</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"4th-item\">\n                    <label class=\"custom-control-label\" for=\"4th-item\">disabled Porta ac consectetur ac</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"5th-item\">\n                    <label class=\"custom-control-label\" for=\"5th-item\">Vestibulum at eros</label>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <!-- 2015 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 2015</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p class=\"mt-1\"><i class=\"fa fa-file-image-o font-medium-4\"></i></p>\n            <h4>Media Gallery</h4>\n            <p class=\"timeline-date\">July 1, 2015</p>\n            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc\n              elit! Sociis in et?</p>\n          </div>\n        </div>\n        <!-- Image grid -->\n        <div class=\"card-content\">\n          <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n          </div>\n          <!--/ Image grid -->\n        </div>\n        <!--/ PhotoSwipe -->\n      </div>\n    </li>\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Application API Support\"><i class=\"fa fa-life-ring\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a>\n                  <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\n                  <i></i>\n                </a>\n            </div>\n            <div class=\"media-body\">\n              <h4 class=\"card-title mb-0\"><a>Application API Support</a></h4>\n              <div class=\"card-subtitle text-muted mt-0\">\n                <span class=\"font-small-3\">15 Oct, 2015 at 8.00 A.M</span>\n                <span class=\"tag tag-pill tag-default tag-warning float-right\">High</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/03.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula.\n                Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Comment</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body\">\n              <div class=\"media\">\n                <div class=\"media-left\">\n                  <a>\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"avatar\" width=\"50\"></span>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"text-bold-600 mb-0\"><a>Crystal Lawson</a></p>\n                  <p class=\"m-0\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>\n                  <div class=\"media\">\n                    <div class=\"media-left\">\n                      <a>\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"avatar\" width=\"50\"></span>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                      <p class=\"text-bold-600 mb-0\"><a>Rafila Găitan</a></p>\n                      <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i class=\"fa fa-smile-o\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>Quote of the day</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">03 March, 2015 at 5 P.M</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/04.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-body\">\n            <blockquote class=\"card-bodyquote\">\n              <p class=\"card-text\">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut\n                nunc elit! Sociis in et?</p>\n              <div>Someone famous in <cite title=\"Source Title\"> - Source Title</cite></div>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <!-- 2014 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 2014</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p><i class=\"fa fa-map-marker font-medium-4\"></i></p>\n            <h4>Moved to Brooklyn</h4>\n            <p class=\"timeline-date\">Jan 1, 2014</p>\n            <p>Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc\n              elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes!\n              Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!</p>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div id=\"moved-brooklyn\" class=\"height-450\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <!-- 2014 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> Founded in 2013</a>\n    </li>\n  </ul>\n</section>\n<!--Vertical Timeline Ends-->"

/***/ }),

/***/ "./src/app/egf/egf.module.ts":
/*!***********************************!*\
  !*** ./src/app/egf/egf.module.ts ***!
  \***********************************/
/*! exports provided: EgfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgfModule", function() { return EgfModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _egf_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./egf.routing.module */ "./src/app/egf/egf.routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm5/ng-chartist.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/egf/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/egf/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeline/horizontal/component/horizontal-timeline.component */ "./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/egf/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/egf/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/egf/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/egf/knowledge-base/knowledge-base.component.ts");
















var EgfModule = /** @class */ (function () {
    function EgfModule() {
    }
    EgfModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _egf_routing_module__WEBPACK_IMPORTED_MODULE_4__["EgfRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            declarations: [
                _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__["GalleryPageComponent"],
                _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__["InvoicePageComponent"],
                _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__["HorizontalTimelinePageComponent"],
                _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_11__["HorizontalTimelineComponent"],
                _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_12__["VerticalTimelinePageComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FaqComponent"],
                _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_15__["KnowledgeBaseComponent"]
            ]
        })
    ], EgfModule);
    return EgfModule;
}());



/***/ }),

/***/ "./src/app/egf/egf.routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/egf/egf.routing.module.ts ***!
  \*******************************************/
/*! exports provided: EgfRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgfRoutingModule", function() { return EgfRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/egf/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/egf/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/egf/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/egf/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/egf/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/egf/knowledge-base/knowledge-base.component.ts");
/* harmony import */ var _shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/authentification/guard/authorization.guard */ "./src/app/shared/authentification/guard/authorization.guard.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'administration',
                loadChildren: function () { return Promise.all(/*! import() | administration-administration-module */[__webpack_require__.e("common"), __webpack_require__.e("administration-administration-module")]).then(__webpack_require__.bind(null, /*! ../administration/administration.module */ "./src/app/administration/administration.module.ts")).then(function (m) { return m.AdministrationModule; }); },
                canActivateChild: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizationGuard"]],
            },
            {
                path: 'configuration',
                loadChildren: function () { return Promise.all(/*! import() | configuration-configuration-module */[__webpack_require__.e("default~components-ui-components-module~configuration-configuration-module~users-users-module"), __webpack_require__.e("default~configuration-configuration-module~data-tables-data-tables-module~profils-profils-module"), __webpack_require__.e("default~components-ui-components-module~configuration-configuration-module~profils-profils-module"), __webpack_require__.e("common"), __webpack_require__.e("configuration-configuration-module")]).then(__webpack_require__.bind(null, /*! ../configuration/configuration.module */ "./src/app/configuration/configuration.module.ts")).then(function (m) { return m.ConfigurationModule; }); },
                canActivateChild: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizationGuard"]],
            },
            {
                path: 'gallery',
                component: _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"],
                data: {
                    title: 'Gallery Page'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__["InvoicePageComponent"],
                data: {
                    title: 'Invoice Page'
                }
            },
            {
                path: 'horizontaltimeline',
                component: _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__["HorizontalTimelinePageComponent"],
                data: {
                    title: 'Horizontal Timeline Page'
                }
            },
            {
                path: 'verticaltimeline',
                component: _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__["VerticalTimelinePageComponent"],
                data: {
                    title: 'Vertical Timeline Page'
                }
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                data: {
                    title: 'Search'
                }
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'kb',
                component: _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_9__["KnowledgeBaseComponent"],
                data: {
                    title: 'Knowledge Base'
                }
            }
        ]
    }
];
var EgfRoutingModule = /** @class */ (function () {
    function EgfRoutingModule() {
    }
    EgfRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EgfRoutingModule);
    return EgfRoutingModule;
}());



/***/ }),

/***/ "./src/app/egf/faq/faq.component.scss":
/*!********************************************!*\
  !*** ./src/app/egf/faq/faq.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/egf/faq/faq.component.ts":
/*!******************************************!*\
  !*** ./src/app/egf/faq/faq.component.ts ***!
  \******************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.service */ "./src/app/egf/faq/faq.service.ts");



// import { Object } from 'core-js/library/web/timers';
var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService) {
        this.faqService = faqService;
        this.faqs = faqService.faqs;
    }
    FaqComponent.prototype.filter = function (searchValue) {
        if (searchValue === '') {
            this.faqs = this.faqService.faqs;
        }
        else {
            this.faqs = this.faqService.faqs.filter(function (faqs) { return faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1; });
        }
    };
    FaqComponent.ctorParameters = function () { return [
        { type: _faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"] }
    ]; };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/faq/faq.component.html"),
            providers: [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]],
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/egf/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/egf/faq/faq.model.ts":
/*!**************************************!*\
  !*** ./src/app/egf/faq/faq.model.ts ***!
  \**************************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
var FAQ = /** @class */ (function () {
    function FAQ(faqId, title, content) {
        this.faqId = faqId;
        this.title = title;
        this.content = content;
    }
    FAQ.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return FAQ;
}());



/***/ }),

/***/ "./src/app/egf/faq/faq.service.ts":
/*!****************************************!*\
  !*** ./src/app/egf/faq/faq.service.ts ***!
  \****************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.model */ "./src/app/egf/faq/faq.model.ts");



var FaqService = /** @class */ (function () {
    function FaqService() {
        this.faqs = [
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n             Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](2, 'Vestibulum hendrerit eros id finibus fermentum?', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](3, 'Nunc maximus turpis et vulputate euismod?', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](4, 'Vivamus pulvinar diam at viverra sagittis?', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](5, 'Sed elementum nisl ac lectus luctus viverra?', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](6, 'Nulla ut tortor et arcu porttitor sollicitudin a a odio?', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](7, 'Phasellus imperdiet eros vitae mi malesuada consectetur?', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et ."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](8, 'Duis at metus eleifend, elementum mauris eu, tincidunt du?', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](9, 'Sed sit amet lacus sagittis, viverra ex at, volutpat leo?', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](10, 'Proin facilisis magna congue mattis mattis?', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](11, 'Suspendisse eget nibh ut urna tincidunt efficitur?', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae. Mauris viverra nulla vitae pulvinar sollicitudin.\n             "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](12, 'Fusce sed velit ut nibh blandit posuere?', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](13, 'Etiam auctor nisi non sollicitudin aliquet?', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](14, 'Donec sit amet orci sit amet tellus laoreet tempus?', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor.\n             Ut sed viverra neque, nec hendrerit tortor. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](15, 'Nullam consequat urna ac nunc lobortis ullamcorper?', "Enim est suscipit augue, in porta ex nisi quis est.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
        ];
    }
    FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/egf/gallery/gallery-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/egf/gallery/gallery-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi9nYWxsZXJ5L2dhbGxlcnktcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/egf/gallery/gallery-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/egf/gallery/gallery-page.component.ts ***!
  \*******************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
    }
    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/gallery/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/egf/gallery/gallery-page.component.scss")]
        })
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/egf/invoice/invoice-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/egf/invoice/invoice-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi9pbnZvaWNlL2ludm9pY2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/egf/invoice/invoice-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/egf/invoice/invoice-page.component.ts ***!
  \*******************************************************/
/*! exports provided: InvoicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageComponent", function() { return InvoicePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoicePageComponent = /** @class */ (function () {
    function InvoicePageComponent() {
    }
    InvoicePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-page',
            template: __webpack_require__(/*! raw-loader!./invoice-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/invoice/invoice-page.component.html"),
            styles: [__webpack_require__(/*! ./invoice-page.component.scss */ "./src/app/egf/invoice/invoice-page.component.scss")]
        })
    ], InvoicePageComponent);
    return InvoicePageComponent;
}());



/***/ }),

/***/ "./src/app/egf/knowledge-base/knowledge-base.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/egf/knowledge-base/knowledge-base.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi9rbm93bGVkZ2UtYmFzZS9rbm93bGVkZ2UtYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/egf/knowledge-base/knowledge-base.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/egf/knowledge-base/knowledge-base.component.ts ***!
  \****************************************************************/
/*! exports provided: KnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseComponent", function() { return KnowledgeBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var KnowledgeBaseComponent = /** @class */ (function () {
    function KnowledgeBaseComponent(modalService) {
        this.modalService = modalService;
    }
    KnowledgeBaseComponent.prototype.GetDetails = function (content, titleText) {
        this.title = titleText;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    KnowledgeBaseComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    KnowledgeBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knowledge-base',
            template: __webpack_require__(/*! raw-loader!./knowledge-base.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/knowledge-base/knowledge-base.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/egf/knowledge-base/knowledge-base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], KnowledgeBaseComponent);
    return KnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/egf/search/search.component.scss":
/*!**************************************************!*\
  !*** ./src/app/egf/search/search.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/egf/search/search.component.ts":
/*!************************************************!*\
  !*** ./src/app/egf/search/search.component.ts ***!
  \************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/egf/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd-horizontal-timeline .events-content {\n  margin: 1rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvZWdmL3RpbWVsaW5lL2hvcml6b250YWwvY29tcG9uZW50L2hvcml6b250YWwtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZ2YvdGltZWxpbmUvaG9yaXpvbnRhbC9jb21wb25lbnQvaG9yaXpvbnRhbC10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIHtcbiAgLmV2ZW50cy1jb250ZW50IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelineComponent", function() { return HorizontalTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HorizontalTimelineComponent = /** @class */ (function () {
    function HorizontalTimelineComponent(_cdr) {
        this._cdr = _cdr;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 80;
        this._dateFormat = 'dd.MM.yyyy';
        this._dateFormatTop = 'dd MMM';
        this._disabled = false;
        this._showContent = false;
    }
    HorizontalTimelineComponent_1 = HorizontalTimelineComponent;
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineWrapperWidth", {
        set: function (value) {
            this._timelineWrapperWidth = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "eventsMinDistance", {
        set: function (value) {
            this._eventsMinDistance = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineElements", {
        get: function () {
            return this._timelineElements;
        },
        set: function (value) {
            this._timelineElements = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        set: function (value) {
            this._dateFormat = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormatTop", {
        get: function () {
            return this._dateFormatTop;
        },
        set: function (value) {
            this._dateFormatTop = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "showContent", {
        get: function () {
            return this._showContent;
        },
        set: function (value) {
            this._showContent = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    HorizontalTimelineComponent.pxToNumber = function (val) {
        return Number(val.replace('px', ''));
    };
    HorizontalTimelineComponent.getElementWidth = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return HorizontalTimelineComponent_1.pxToNumber(computedStyle.width);
    };
    HorizontalTimelineComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    HorizontalTimelineComponent.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline);
        var timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
            timelineStyle.getPropertyValue('-moz-transform') ||
            timelineStyle.getPropertyValue('-ms-transform') ||
            timelineStyle.getPropertyValue('-o-transform') ||
            timelineStyle.getPropertyValue('transform');
        var translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    };
    HorizontalTimelineComponent.setTransformValue = function (element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    };
    HorizontalTimelineComponent.dayDiff = function (first, second) {
        return Math.round(second.getTime() - first.getTime());
    };
    HorizontalTimelineComponent.minLapse = function (elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        var result = 0;
        for (var i = 1; i < elements.length; i++) {
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    HorizontalTimelineComponent.prototype.ngAfterViewInit = function () {
        this._cdr.detach();
        this._viewInitialized = true;
        this.initView();
    };
    HorizontalTimelineComponent.prototype.onScrollClick = function (event, forward) {
        event.preventDefault();
        this.updateSlide(this.eventsWrapperWidth, forward);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.onEventClick = function (event, selectedItem) {
        event.preventDefault();
        if (this._disabled) {
            return;
        }
        var element = event.target;
        // detect click on the a single event - show new event content
        var visibleItem = this._timelineElements[0];
        this._timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this._timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        this.updateFilling(element);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.initTimeline = function (timeLines) {
        var eventsMinLapse = HorizontalTimelineComponent_1.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    };
    HorizontalTimelineComponent.prototype.updateSlide = function (timelineTotWidth, forward) {
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
        }
    };
    HorizontalTimelineComponent.prototype.updateTimelinePosition = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = HorizontalTimelineComponent_1.pxToNumber(eventStyle.getPropertyValue('left'));
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
        }
    };
    HorizontalTimelineComponent.prototype.translateTimeline = function (value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        HorizontalTimelineComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
    };
    HorizontalTimelineComponent.prototype.setTimelineWidth = function (elements, width, eventsMinLapse) {
        var timeSpan = 100;
        if (elements.length > 1) {
            timeSpan = HorizontalTimelineComponent_1.dayDiff(elements[0].date, elements[elements.length - 1].date);
        }
        var timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        this.updateFilling(aHref);
        this.updateTimelinePosition(aHref);
        return this.eventsWrapperWidth;
    };
    HorizontalTimelineComponent.prototype.updateFilling = function (element) {
        // change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = eventStyle.getPropertyValue('left');
        var eventWidth = eventStyle.getPropertyValue('width');
        var eventLeftNum = HorizontalTimelineComponent_1.pxToNumber(eventLeft) + HorizontalTimelineComponent_1.pxToNumber(eventWidth) / 2;
        var scaleValue = eventLeftNum / this.eventsWrapperWidth;
        HorizontalTimelineComponent_1.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
    };
    HorizontalTimelineComponent.prototype.initView = function () {
        if (!this._viewInitialized) {
            return;
        }
        if (this._timelineElements && this._timelineElements.length) {
            for (var i = 0; i < this._timelineElements.length; i++) {
                if (this._timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initTimeline(this._timelineElements);
        }
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.setDatePosition = function (elements, min, eventsMinLapse) {
        var timelineEventsArray = this.timelineEvents.toArray();
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[0].date, component.date);
            var distanceNorm = Math.round(distance / eventsMinLapse);
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            var spanWidth = HorizontalTimelineComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
            i++;
        }
    };
    var HorizontalTimelineComponent_1;
    HorizontalTimelineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventsWrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "eventsWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillingLine', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "fillingLine", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('timelineEvents'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], HorizontalTimelineComponent.prototype, "timelineEvents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "timelineWrapperWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "eventsMinDistance", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], HorizontalTimelineComponent.prototype, "timelineElements", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormat", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormatTop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "showContent", null);
    HorizontalTimelineComponent = HorizontalTimelineComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'horizontal-timeline',
            template: __webpack_require__(/*! raw-loader!./horizontal-timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('contentState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        position: 'relative', 'z-index': 2, opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./horizontal-timeline.component.scss */ "./src/app/egf/timeline/horizontal/component/horizontal-timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HorizontalTimelineComponent);
    return HorizontalTimelineComponent;
}());



/***/ }),

/***/ "./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VnZi90aW1lbGluZS9ob3Jpem9udGFsL2hvcml6b250YWwtdGltZWxpbmUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HorizontalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelinePageComponent", function() { return HorizontalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HorizontalTimelinePageComponent = /** @class */ (function () {
    function HorizontalTimelinePageComponent() {
        this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae \n    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, \n    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam \n    quisquam, quae, temporibus dolores porro doloribus.";
        this.timeline = [
            { date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
            { date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
            { date: new Date(2014, 3, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 5, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 7, 9), title: 'Event title here', content: this.content },
            { date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
            { date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
            { date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
            { date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
            { date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
            { date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
        ];
    }
    HorizontalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horizontal-timeline-page',
            template: __webpack_require__(/*! raw-loader!./horizontal-timeline-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-timeline-page.component.scss */ "./src/app/egf/timeline/horizontal/horizontal-timeline-page.component.scss")]
        })
    ], HorizontalTimelinePageComponent);
    return HorizontalTimelinePageComponent;
}());



/***/ }),

/***/ "./src/app/egf/timeline/vertical/vertical-timeline-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/egf/timeline/vertical/vertical-timeline-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-area {\n  stroke: none;\n  fill-opacity: 0.1; }\n\n:host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea1 .ct-series-a .ct-area {\n  fill-opacity: 0.3;\n  fill: #FF586B; }\n\n:host /deep/ .lineArea1 .ct-series-b .ct-area {\n  fill: #FF586B;\n  fill-opacity: 0.6; }\n\n:host /deep/ .lineArea1 .ct-line {\n  stroke: #FF586B;\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea1 .ct-point {\n  stroke-width: 0px; }\n\nagm-map {\n  height: 450px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvZWdmL3RpbWVsaW5lL3ZlcnRpY2FsL3ZlcnRpY2FsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFLckI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZ2YvdGltZWxpbmUvdmVydGljYWwvdmVydGljYWwtdGltZWxpbmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyAuY3QtYXJlYSB7XG4gICAgc3Ryb2tlOiBub25lO1xuICAgIGZpbGwtb3BhY2l0eTogMC4xO1xufVxuXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBTdGFydHNcblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsLW9wYWNpdHk6IDAuMztcbiAgICBmaWxsOiAjRkY1ODZCO1xufVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xuICAgIGZpbGw6ICNGRjU4NkI7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjY7XG59XG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMSAuY3QtbGluZXtcbiAgICBzdHJva2U6ICNGRjU4NkI7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXG5cbmFnbS1tYXAge1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/egf/timeline/vertical/vertical-timeline-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/egf/timeline/vertical/vertical-timeline-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: VerticalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTimelinePageComponent", function() { return VerticalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var VerticalTimelinePageComponent = /** @class */ (function () {
    function VerticalTimelinePageComponent() {
        // Google map lat-long
        this.lat = 40.650002;
        this.lng = -73.949997;
        // Line with Area Chart 1 Starts
        this.lineArea1 = {
            type: 'Line',
            data: data['lineArea1'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(38, 198, 218, 1)'
                    });
                },
            },
        };
        // Line with Area Chart 1 Ends
    }
    VerticalTimelinePageComponent.prototype.ngOnInit = function () {
    };
    VerticalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vertical-timeline-page',
            template: __webpack_require__(/*! raw-loader!./vertical-timeline-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/egf/timeline/vertical/vertical-timeline-page.component.html"),
            styles: [__webpack_require__(/*! ./vertical-timeline-page.component.scss */ "./src/app/egf/timeline/vertical/vertical-timeline-page.component.scss")]
        })
    ], VerticalTimelinePageComponent);
    return VerticalTimelinePageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=egf-egf-module.js.map