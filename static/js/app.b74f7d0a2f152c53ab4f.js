webpackJsonp([1], {
	"+Gm1": function(t, a) {},
	"0Kot": function(t, a) {},
	"2T0d": function(t, a) {},
	"3lD3": function(t, a) {},
	"9fDm": function(t, a) {},
	"ApO+": function(t, a) {},
	F7sP: function(t, a) {},
	FqGo: function(t, a) {},
	H5O8: function(t, a) {},
	IuJc: function(t, a) {
		t.exports = {
			urlList: ["http://pc1.ng-demo.com.com/", "http://pc2.ng-demo.com.com/", "http://pc3.ng-demo.com.com/", "http://pc4.ng-demo.com.com/", "http://pc5.ng-demo.com.com/", "http://pc6.ng-demo.com.com/"]
		}
	},
	K8E7: function(t, a) {},
	KmkR: function(t, a) {},
	NHnr: function(t, a, s) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var e = s("7+uW"),
			i = s("mvHQ"),
			n = s.n(i),
			o = {
				name: "App",
				data: function() {
					return {
						daoTime: null,
						loading: !1,
						pid: ""
					}
				},
				created: function() {
					var t = this.$route.query;
					if (t.pid) {
						if (this.pid = t.pid, "/homes" == this.$route.path) return;
						this.$router.push({
							path: "/homes?pid=" + t.pid
						})
					}
					this.getVisitUrl(), this.getApp(), sessionStorage.getItem("token") && (this.openDaoTime(), this.getUserInfo())
				},
				methods: {
					getApp: function() {
						var t = this;
						t.$apiFun.post("/api/app", {}).then(function(a) {
							200 == a.code && (localStorage.setItem("appInfo", n()(a.data)), t.$store.commit("changappInfo"), document.getElementsByTagName("title")[0].innerText = t.$store.state.appInfo.title)
						})
					},
					goNav: function(t) {
						if ("/" == t) return t = "/homes", void this.$router.push({
							path: "/homes"
						});
						if ("/userredpackets" != t)
							if (t != this.$route.fullPath)
								if ("/app" != t) this.url = t, this.$router.push({
									path: t
								});
								else {
									var a = this.$router.resolve({
										path: "/app"
									});
									window.open(a.href, "_blank")
								} else {
									if ("/" == t) return;
									this.showTost(0, "已在当前页面！")
								} else {
									if (!this.$store.state.token) return void this.showTost(0, "请登录！");
									if (0 == this.$store.state.appInfo.redpacket_switch) return void this.showTost(0, "红包已关闭");
									var s = this.$router.resolve({
										path: "/userredpackets"
									});
									window.open(s.href, "_blank")
								}
					},
					showTost: function(t, a) {
						var s = t ? "success" : "warning";
						$("body").append('\n            <div class="alert_msg active delay toasted alert_msgss">\n            <div class="alert_msg_pos">\n            <div class="alert_msg_dialog">\n                <div class="alert_msg_header">\n                    <div id="alert_title">' + a + '</div>\n                    <div>\n                        <div id="alert_icon" class="ico-alert-' + s + '"></div>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>'), setTimeout('$(".alert_msgss").detach()', 2e3)
					},
					openKefu: function() {
						var t = this;
						t.showTost(1, "正在链接人工客服"), t.$apiFun.post("/api/getservicerurl", {}).then(function(a) {
							200 != a.code && t.showTost(0, a.message), 200 == a.code && window.open(a.data.url)
						})
					},
					getVisitUrl: function() {
						var t = this;
						t.$apiFun.get("/api/getVisitUrl", {}).then(function(a) {
							if (200 == a.code) {
								var s = t.pid ? a.data.url + "?pid=" + t.pid : a.data.url;
								window.open(s, "_self")
							}
						}).
						catch (function(t) {})
					},
					closeDaoTime: function() {
						null != this.daoTime && clearInterval(this.daoTime), this.daoTime = null
					},
					getBalance: function() {
						var t = this;
						t.$apiFun.post("/api/balance", {}).then(function(a) {
							if (200 == a.code) {
								var s = JSON.parse(localStorage.getItem("userInfo"));
								s.balance = a.data.balance, localStorage.setItem("userInfo", n()(s)), t.$store.commit("changUserInfo")
							}
							401 == a.code && (localStorage.clear(), sessionStorage.clear(), t.$store.commit("changUserInfo"), t.$store.commit("changToken"), t.closeDaoTime(), t.$router.push({
								path: "/"
							}))
						}).
						catch (function(t) {})
					},
					openDaoTime: function() {
						var t = this;
						t.daoTime = setInterval(function() {
							t.getBalance()
						}, 4300)
					},
					getUserInfo: function() {
						var t = this;
						t.$apiFun.post("/api/user", {}).then(function(a) {
							if (200 === a.code) {
								var s = a.data,
									e = s.current_vip,
									i = e.indexOf("P"),
									o = e.substr(i + 1, e.length);
								s.vip = o, localStorage.setItem("userInfo", n()(s)), t.userInfo = s, t.$store.commit("changUserInfo")
							}
						})
					},
					showLoading: function() {
						this.loading = !0
					},
					hideLoading: function() {
						this.loading = !1
					}
				},
				mounted: function() {}
			}, r = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						attrs: {
							id: "app"
						}
					}, [1 == t.$store.state.appInfo.site_state ? s("div", [s("keep-alive", [t.$route.meta.keepAlive ? s("router-view", {
						key: t.$route.name
					}) : t._e()], 1), t._v(" "), t.$route.meta.keepAlive ? t._e() : s("router-view", {
						key: t.$route.name
					}), t._v(" "), t.loading ? s("div", {
						attrs: {
							id: "loading_screen"
						}
					}, [t._m(0)]) : t._e()], 1) : t._e(), t._v(" "), 0 == t.$store.state.appInfo.site_state ? s("div", {
						staticStyle: {
							"box-sizing": "border-box",
							padding: "30px",
							"fong-size": "26px"
						}
					}, [t._v(t._s(t.$store.state.appInfo.repair_tips))]) : t._e()])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "lds-ring large"
						}, [a("div"), this._v(" "), a("div"), this._v(" "), a("div"), this._v(" "), a("div")])
					}
				]
			};
		var c = s("VU/8")(o, r, !1, function(t) {
			s("F7sP")
		}, null, null).exports,
			l = s("/ocq"),
			_ = {
				name: "Header",
				data: function() {
					return {
						baseURL: "",
						bfNum: 0,
						vipLis: [],
						realbetList: [],
						jokerList: [],
						gamingList: [],
						sportList: [],
						lotteryList: [],
						conciseList: [],
						pid: ""
					}
				},
				created: function() {
					this.baseURL = sessionStorage.getItem("baseURL") || "", this.getGameList(), this.uservip()
				},
				methods: {
					transall: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/transall", {}).then(function(a) {
							t.$parent.showTost(1, a.message), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					getGameList: function() {
						var t = this;
						t.$apiFun.get("/api/game/list", {
							category: ""
						}).then(function(a) {
							200 == a.code && a.data.forEach(function(a) {
								"realbet" == a.category_id && t.realbetList.push(a), "joker" == a.category_id && t.jokerList.push(a), "gaming" == a.category_id && t.gamingList.push(a), "sport" == a.category_id && t.sportList.push(a), "lottery" == a.category_id && t.lotteryList.push(a), "concise" == a.category_id && t.conciseList.push(a)
							})
						})
					},
					getbfNum: function() {
						var t = 0,
							a = 1 * this.$store.state.userInfo.vip;
						this.vipLis.forEach(function(s, e) {
							console.log(), e == a && (t = 1 * s.recharge)
						});
						var s = 1 * this.$store.state.userInfo.paysum,
							e = 0 == s || 0 == t ? 0 : Math.round(s / t * 100);
						this.bfNum = e > 100 ? 100 : e
					},
					uservip: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/uservip", {}).then(function(a) {
							200 == a.code && (t.vipLis = a.data, t.getbfNum()), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					openGongGao: function() {
						$("#web_normal_announcement_popout").modal("show")
					},
					outLogin: function() {
						var t = this;
						this.$confirm("确定要退出登录吗？", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning"
						}).then(function() {
							t.$parent.showLoading(), t.$apiFun.post("/api/logoff", {}).then(function(a) {
								localStorage.clear(), sessionStorage.clear(), t.$store.commit("changUserInfo"), t.$store.commit("changToken"), t.$parent.closeDaoTime(), setTimeout(function() {
									t.$parent.hideLoading(), t.$parent.goNav("/")
								}, 1e3)
							}).
							catch (function() {
								localStorage.clear(), sessionStorage.clear(), t.$store.commit("changUserInfo"), t.$store.commit("changToken"), t.$parent.closeDaoTime(), setTimeout(function() {
									t.$parent.hideLoading(), t.$parent.goNav("/")
								}, 1e3)
							})
						}).
						catch (function() {})
					},
					getBalance: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/balance", {}).then(function(a) {
							if (401 == a.code && (localStorage.clear(), sessionStorage.clear(), t.$store.commit("changUserInfo"), t.$store.commit("changToken"), t.$parent.closeDaoTime(), t.$router.push({
								path: "/homes"
							})), 200 == a.code) {
								var s = JSON.parse(localStorage.getItem("userInfo"));
								s.balance = a.data.balance, localStorage.setItem("userInfo", n()(s)), t.$store.commit("changUserInfo")
							}
							t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {}
			}, d = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", [t._m(0), t._v(" "), s("div", {
						staticClass: "header_bottom_outside"
					}, [s("div", {
						staticClass: "header_bottom"
					}, [s("div", {
						staticClass: "header_bottom_logo"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/homes")
							}
						}
					}, [s("img", {
						attrs: {
							alt: "",
							src: t.$store.state.appInfo.site_logo,
							onerror: "this.src = '/static/image/logo_horizontal.png'"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "header_bottom_medium"
					}, [s("div", {
						staticClass: "header_menu_item"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/homes")
							}
						}
					}, [t._v("首页 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "7"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/sports")
							}
						}
					}, [t._v("体育 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.sportList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "2"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/eSports")
							}
						}
					}, [t._v("电竞 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.gamingList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "7"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/realPerson")
							}
						}
					}, [t._v("真人 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.realbetList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "7"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/lottery")
							}
						}
					}, [t._v("彩票 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.lotteryList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "7"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/cards")
							}
						}
					}, [t._v("棋牌 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.jokerList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])]), t._v(" "), s("div", {
						staticClass: "header_menu_item",
						attrs: {
							"data-varcount": "7"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/electronics")
							}
						}
					}, [t._v("电子 "), s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow_down.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "header_menu_dropdown"
					}, [s("div", {
						staticClass: "header_dropdown_position"
					}, [s("div", {
						staticClass: "left"
					}, [s("div", {
						staticClass: "text"
					}, [s("div", {
						staticClass: "more"
					}, t._l(t.conciseList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [t._v(t._s(a.name))]) : t._e()
					}), 0)])])])])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_last"
					}, [s("div", {
						staticClass: "header_bottom_item jsBox_vip"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/vip")
							}
						}
					}, [t._m(1), t._v(" "), s("div", [t._v("VIP")])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_item jsBox_promo"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/discount")
							}
						}
					}, [t._m(2), t._v(" "), s("div", [t._v("优惠")])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_item"
					}, [s("a", {
						attrs: {
							target: "_blank"
						},
						on: {
							click: t.$parent.openKefu
						}
					}, [t._m(3), t._v(" "), s("div", [t._v("客服")]), t._v(" "), s("div", {
						staticClass: "jsBox"
					}, [s("ul", [s("li", [s("a", {
						attrs: {
							target: "_blank"
						},
						on: {
							click: t.$parent.openKefu
						}
					}, [s("img", {
						attrs: {
							src: "/static/image/g_cs.png"
						}
					}), t._v("24小时在线客服 ")])])])])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_item"
					}, [s("a", {
						on: {
							click: t.$parent.getAgentLoginUrl
						}
					}, [t._m(4), t._v(" "), s("div", [t._v("代理")])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_item"
					}, [s("a", {
						attrs: {
							target: "_blank"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/app")
							}
						}
					}, [t._m(5), t._v(" "), s("div", [t._v("APP")])])]), t._v(" "), s("div", {
						staticClass: "header_bottom_item"
					}, [s("a", {
						attrs: {
							href: "#"
						},
						on: {
							click: t.openGongGao
						}
					}, [t._m(6), t._v(" "), s("div", [t._v("公告")])])])]), t._v(" "), s("div", {
						staticClass: "header_login_part"
					}, [t.$store.state.token ? t._e() : s("div", {
						staticClass: "before_login_container"
					}, [s("div", {
						staticClass: "header_login",
						attrs: {
							id: "header_register",
							"data-toggle": "modal",
							"data-target": "#login_popup"
						}
					}, [t._v("登录")]), t._v(" "), s("span", {
						staticClass: "slash_text"
					}, [t._v("/")]), t._v(" "), s("div", {
						staticClass: "header_register",
						attrs: {
							onclick: "focusTab('register');",
							id: "header_register",
							"data-toggle": "modal",
							"data-target": "#register_popup"
						}
					}, [t._v("注册")])]), t._v(" "), t.$store.state.token ? s("div", {
						staticClass: "header_bottom_after_login"
					}, [s("div", [s("a", {
						staticClass: "header_bottom_after_login_profile"
					}, [s("span", [t.$store.state.userInfo.avatar ? s("img", {
						staticStyle: {
							width: "50px",
							"border-radius": "50%"
						},
						attrs: {
							src: t.$store.state.userInfo.avatar,
							alt: ""
						}
					}) : s("div", {
						staticClass: "bg-profile_icon"
					})])])]), t._v(" "), s("div", [s("a", {
						attrs: {
							href: "javascript:;"
						}
					}, [t._v(t._s(t.$store.state.userInfo.username || ""))]), t._v(" "), s("img", {
						staticClass: "header_vip",
						staticStyle: {
							width: "auto !important",
							height: "18px"
						},
						attrs: {
							alt: "",
							src: t.baseURL + t.$store.state.userInfo.vipname,
							height: "20px"
						}
					}), t._v(" "), s("div", {
						staticClass: "header_wallet_balance"
					}, [t._m(7), t._v(" "), s("span", {
						staticClass: "main_wallet_bal",
						attrs: {
							id: "header_wallet_balance"
						}
					}, [t._v(t._s(t.$store.state.userInfo.balance))])])]), t._v(" "), s("div", {
						staticClass: "header_after_login_slidedown"
					}, [s("div", {
						staticClass: "header_bottom_after_popup_profile"
					}, [s("a", {
						staticClass: "header_bottom_after_popup_profile_pic",
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile")
							}
						}
					}, [s("svg", {
						staticClass: "progress-ring",
						attrs: {
							width: "60",
							height: "60"
						}
					}, [s("circle", {
						attrs: {
							stroke: "#FFF",
							"stroke-width": "2",
							fill: "transparent",
							r: "26",
							cx: "30",
							cy: "30"
						}
					}), t._v(" "), s("circle", {
						staticClass: "progress-ring__circle",
						attrs: {
							stroke: "#5A8BF1",
							"stroke-width": "3",
							fill: "transparent",
							r: "26",
							cx: "30",
							cy: "30"
						}
					})]), t._v(" "), s("span", [t.$store.state.userInfo.avatar ? s("img", {
						staticStyle: {
							width: "50px",
							"border-radius": "50%"
						},
						attrs: {
							src: t.$store.state.userInfo.avatar,
							alt: ""
						}
					}) : s("div", {
						staticClass: "bg-profile_icon"
					})])]), t._v(" "), s("a", {
						staticClass: "header_bottom_after_popup_profile_name",
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile")
							}
						}
					}, [t._v(" " + t._s(t.$store.state.userInfo.username || "") + " "), s("img", {
						attrs: {
							alt: "",
							src: "/static/image/safety.svg"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_viplevel",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#promo_popup",
							onclick: "focusTab('myvip');"
						}
					}, [s("div", {
						staticClass: "vip_level_detail",
						on: {
							click: function(a) {
								return t.$parent.goNav("/vip")
							}
						}
					}, [s("div", [s("img", {
						staticStyle: {
							width: "46px !important"
						},
						attrs: {
							alt: "",
							src: t.baseURL + t.$store.state.userInfo.vipname
						}
					})]), t._v(" "), s("div", {
						staticClass: "vip_level_title",
						attrs: {
							title: t.$store.state.userInfo.current_vip
						}
					}, [t._v(t._s(t.$store.state.userInfo.current_vip))]), t._v(" "), t._m(8)]), t._v(" "), s("div", {
						staticClass: "progress header_bottom_after_popup_progress"
					}, [s("div", {
						staticClass: "progress-bar",
						style: "width: " + t.bfNum + "%",
						attrs: {
							role: "progressbar",
							"aria-valuenow": "0.00",
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_wallet header_bottom_after_popup_block"
					}, [t._m(9), t._v(" "), s("div", {
						staticClass: "d-flex"
					}, [s("span", {
						staticClass: "main_wallet_bal",
						attrs: {
							id: "wallet_balance"
						}
					}, [t._v(t._s(t.$store.state.userInfo.balance))]), t._v(" "), s("img", {
						attrs: {
							alt: "",
							src: "/static/image/refresh_w.png",
							id: "refresh_amount"
						},
						on: {
							click: t.getBalance
						}
					})]), t._v(" "), s("div")]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_wallet header_bottom_after_popup_block",
						staticStyle: {
							cursor: "pointer"
						},
						on: {
							click: t.transall
						}
					}, [t._m(10), t._v(" "), s("div", {
						staticClass: "d-flex"
					}, [s("span", {
						staticClass: "main_wallet_bal",
						staticStyle: {
							"font-size": "12px"
						},
						attrs: {
							id: "wallet_balance"
						}
					}, [t._v("一键回收")]), t._v(" "), s("img", {
						attrs: {
							alt: "",
							src: "/static/image/refresh_w.png",
							id: "refresh_amount"
						},
						on: {
							click: t.getBalance
						}
					})]), t._v(" "), s("div")]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_wallet_action"
					}, [s("button", {
						staticClass: "btn btn_navprofile",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: function(a) {
								return t.$parent.focusTab("deposit")
							}
						}
					}, [t._v("存款")]), t._v(" "), s("button", {
						staticClass: "btn btn_navprofile",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: function(a) {
								return t.$parent.focusTab("withdrawal")
							}
						}
					}, [t._v("取款")]), t._v(" "), s("button", {
						staticClass: "btn btn_navprofile",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: t.$parent.openZhuanzhang
						}
					}, [t._v("转账")])]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_block",
						attrs: {
							id: "index_pm"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/message")
							}
						}
					}, [t._m(11), t._v(" "), t._m(12), t._v(" "), t._m(13)]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_block",
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile")
							}
						}
					}, [t._m(14), t._v(" "), t._m(15), t._v(" "), t._m(16)]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_block",
						on: {
							click: function(a) {
								return t.$parent.goNav("/bankCard")
							}
						}
					}, [t._m(17), t._v(" "), t._m(18), t._v(" "), t._m(19)]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_block csLink",
						on: {
							click: t.$parent.openKefu
						}
					}, [t._m(20), t._v(" "), t._m(21), t._v(" "), t._m(22)]), t._v(" "), s("div", {
						staticClass: "header_bottom_after_popup_logout"
					}, [s("button", {
						staticClass: "btn btn_navprofile",
						on: {
							click: t.outLogin
						}
					}, [t._v("退出登录")])])])]) : t._e()])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "fallback_perload"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_fallback_html.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_vip.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_treasurebox.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_cs.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_affiliate.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_appdownload.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "header_bottom_icon"
						}, [a("img", {
							attrs: {
								src: "/static/image/nav_marquee.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("span", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_wallet.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "arrow",
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/general/arrow_right.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_wallet.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_wallet.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_mail.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("a", {
							attrs: {
								href: "javascript:;"
							}
						}, [this._v("我的信息")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "arrow",
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_record.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("a", [this._v("钱包记录")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "arrow",
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/bankcards_bg.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("a", [this._v("銀行卡管理")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "arrow",
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_cs.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("a", {
							attrs: {
								href: "###"
							}
						}, [this._v("客服")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "arrow",
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					}
				]
			};
		var v = {
			render: function() {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", {
					staticClass: "footer_area"
				}, [s("div", {
					staticClass: "footer_width"
				}, [s("div", {
					staticClass: "footer_link"
				}, [s("div", {
					staticClass: "content_block"
				}, [s("div", [s("a", {
					on: {
						click: function(a) {
							return t.$parent.goNav("/about?type=about_us")
						}
					}
				}, [t._v("关于我们")])]), t._v(" "), s("div", [s("a", {
					on: {
						click: function(a) {
							return t.$parent.goNav("/about?type=guide")
						}
					}
				}, [t._v("新手指南")])]), t._v(" "), s("div", [s("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: t.$parent.getAgentLoginUrl
					}
				}, [t._v("代理登陆")])]), t._v(" "), s("div", [s("a", {
					on: {
						click: function(a) {
							return t.$parent.goNav("/about?type=business")
						}
					}
				}, [t._v("企业事务")])]), t._v(" "), s("div", [s("a", {
					on: {
						click: function(a) {
							return t.$parent.goNav("/about?type=contact_us")
						}
					}
				}, [t._v("联系我们")])])]), t._v(" "), s("div", {
					staticClass: "content_block"
				}, [s("div", {
					staticClass: "with_icon"
				}, [s("div", {
					on: {
						click: t.$parent.openKefu
					}
				}, [t._m(0)])])])]), t._v(" "), s("div", {
					staticClass: "footer_copyright"
				}, [t._v("Copyright © 澳門金沙集團SANDS MACAU GROUP Reserved")])])])
			},
			staticRenderFns: [
				function() {
					var t = this.$createElement,
						a = this._self._c || t;
					return a("div", [a("a", {
						attrs: {
							href: "javascript:;",
							target: "_self"
						}
					}, [a("img", {
						staticClass: "out",
						attrs: {
							src: "/static/image/icon_cs.png",
							loading: "lazy",
							alt: ""
						}
					}), this._v(" "), a("img", {
						staticClass: "over",
						attrs: {
							src: "/static/image/icon_cs_hover.png",
							loading: "lazy",
							alt: ""
						}
					}), this._v(" "), a("span", {
						staticClass: "txt"
					}, [a("span", [this._v("24小时在线客服 ")])])])])
				}
			]
		};
		var p = {
			name: "Main",
			data: function() {
				return {
					cun: !1,
					loading: !1,
					homenoticelis: [],
					loginInfo: {},
					registerInfo: {},
					pay_way: "",
					amount: null,
					meyXi: "ERC20",
					xiyiShow: !1,
					bankBox: {},
					step: 1,
					payInfo: {},
					cardLis: [],
					banklist: [],
					usdssLis: [],
					usercardLis: [],
					qutype: 0,
					bankId: null,
					password: null,
					daoTime: null,
					balancelist: [],
					balancelists: [],
					sourcetype: null,
					targettype: null,
					cardInfo: {
						bank: null
					},
					payWayList: {},
					chanmeyXi: null,
					imgLis: ["2PYL", "6AQ5", "8PHD", "21I7", "69HM", "ACWA", "DUZ7", "IY98", "K647", "M52T", "NY52", "NZFA", "SN76", "SP4D", "VAEO", "YFQM", "ZZU5", "7GQT", "LFW3", "NU2T", "UAE3"],
					betAmount: null,
					pid: "",
					index: 0,
					min_price: 100,
					max_price: 1e4
				}
			},
			components: {
				Header: s("VU/8")(_, d, !1, function(t) {
					s("az1F")
				}, "data-v-78b5abda", null).exports,
				Foot: s("VU/8")({
					name: "Foot",
					data: function() {
						return {}
					},
					methods: {},
					mounted: function() {}
				}, v, !1, function(t) {
					s("2T0d")
				}, "data-v-2b402af8", null).exports
			},
			created: function() {
				$(".modal-backdrop").fadeOut(300), $("#deposit_popup").fadeOut(300);
				var t;
				(t = this.$route.query).pid && (this.pid = t.pid), this.getBetAmount(), this.homenotice(), this.getPayWay(), this.$store.state.token && (this.getUsercard(), this.getUsdssList()), (t = this.$route.query).cun && (this.cun = !0), this.getBanklist(), this.getcard(), this.baseURL = sessionStorage.getItem("baseURL") || "", this.changIndex()
			},
			updated: function() {
				$(".normal_announcement_content li").click(function() {
					var t = $(this).index();
					$(".normal_announcement_content li").removeClass("active").eq(t).addClass("active"), $("#web_normal_announcement_popout .tab-content").hide().eq(t).show()
				})
			},
			mounted: function() {
				this.pid && $("#register_popup").modal("show");
				var t = $(".header_menu_item").position();
				$(".header_dropdown_position").css({
					"margin-left": t.left
				}), $(window).resize(function() {
					var t = $(".header_menu_item").position();
					console.log(t.left), $(".header_dropdown_position").css({
						"margin-left": t.left
					})
				}), $(document).off("click", ".turnover_details_onoff").on("click", ".turnover_details_onoff", function() {
					$(".turnover_details").toggleClass("active")
				}), $("#transfer_mode span:eq(0)").click(function() {
					$(".transfer_adjust_form").slideDown(100), $(this).parent().addClass("left").removeClass("right")
				}), $("#transfer_mode span:eq(1)").click(function() {
					$(".transfer_adjust_form").slideUp(100), $(this).parent().addClass("right").removeClass("left")
				}), $("#transfer_swap").click(function() {
					var t = $("#transfer_from").val(),
						a = $("#transfer_to").val();
					$("#transfer_from").val(a), $("#transfer_to").val(t), $("#transfer_from").trigger("change"), $("#transfer_to").trigger("change")
				}), $(document).on("click", ".openBankSelector", function() {
					$(".bank_selector").hasClass("option_clicked") ? $(".bank_selector").toggleClass("d-none") : ($(".bank_selector").removeClass("d-none"), $(".bank_selector").addClass("option_clicked"))
				})
			},
			methods: {
				goBsfgg: function() {
					var t = this.$route.path;
					$(".modal-backdrop").fadeOut(300), $("#deposit_popup").fadeOut(300), $("body").removeClass("modal-open"), $("body").attr("style", ""), "/bankCard" != t ? this.$parent.goNav("/bankCard") : console.log(t)
				},
				getPayRange: function() {
					var t = this,
						a = null;
					"bank" == t.pay_way && (a = "bank"), "wechat" == t.pay_way && (a = "wechat"), "alipay" == t.pay_way && (a = "alipay"), "alipay" == t.pay_way && (a = "alipay"), "usdt" == t.pay_way && ("ERC20" == t.meyXi && (a = "usdt-erc20"), "TRC20" == t.meyXi && (a = "usdt-trc20")), t.showLoading(), t.$apiFun.post("/api/getPayRange", {
						type: a
					}).then(function(a) {
						200 == a.code && (t.min_price = a.data.min_price, t.max_price = a.data.max_price), t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				getBetAmount: function() {
					var t = this;
					t.$apiFun.post("/api/getBetAmount", {}).then(function(a) {
						200 == a.code && (t.betAmount = a.data.bet_amount)
					}).
					catch (function(t) {})
				},
				changIndex: function() {
					this.index = parseInt(20 * Math.random())
				},
				changApiType: function(t) {
					var a = this,
						s = null;
					a.usdssLis.forEach(function(t) {
						t.id != a.bankId || (s = t.bank_owner)
					}), a.chanmeyXi = s, a.password = null, a.amount = null
				},
				goBank: function() {
					$(".modal-backdrop").fadeOut(300), $("#deposit_popup").fadeOut(300), "/bankCard" != this.$route.path && this.$parent.goNav("/bankCard")
				},
				getPayWay: function() {
					var t = this;
					t.showLoading(), t.$apiFun.get("/api/get_pay_way", {}).then(function(a) {
						if (200 == a.code) {
							t.payWayList = a.data, t.payWayList.rengong = 1;
							var s = t.payWayList;
							for (var e in s)
								if (1 == s[e]) return t.pay_way = "card" == e ? "bank" : e, t.hideLoading(), void t.getPayRange()
						}
						t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				focusTab: function(t) {
					function a(a) {
						return t.apply(this, arguments)
					}
					return a.toString = function() {
						return t.toString()
					}, a
				}(function(t) {
					focusTab(t), this.getBetAmount();
					var a = "#nav-" + t;
					"withdrawal" == t && (this.getUsercard(), this.getUsdssList()), (t = "/transfer") && (this.getbalancelists(), this.getUsercard(), this.getUsdssList()), $(a).addClass("active").addClass("show"), $(a).siblings().removeClass("active").removeClass("show")
				}),
				close: function() {
					this.daoTime && clearInterval(this.daoTime), this.daoTime = null
				},
				closes: function() {},
				openZhuanzhang: function() {
					var t = this;
					focusTab("transfer"), $("#nav-transfer").addClass("active").addClass("show"), $("#nav-transfer").siblings().removeClass("active").removeClass("show"), t.getbalancelists(), sessionStorage.getItem("token") && (t.daoTime = setInterval(function() {
						t.getbalancelist()
					}, 4e3))
				},
				isOk: function() {
					var t = this,
						a = {
							amount: t.amount,
							sourcetype: t.sourcetype,
							targettype: t.targettype
						};
					null != t.amount ? (t.showLoading(), t.$apiFun.post("/api/transfer", a).then(function(a) {
						t.showTost(1, a.message), 200 === a.code ? (t.refreshusermoney(), t.getbalancelists(), t.amount = null, t.sourcetype = null, t.targettype = null) : t.hideLoading()
					})) : t.showTost(0, "请输入操作金额！")
				},
				changVal: function(t, a) {
					0 == t ? (this.sourcetype = "userbalance", this.targettype = a) : (this.sourcetype = a, this.targettype = "userbalance")
				},
				getbalancelists: function() {
					var t = this;
					t.showLoading(), t.$apiFun.post("/api/balancelist", {}).then(function(a) {
						if (200 === a.code) {
							t.balancelist = a.data;
							var s = a.data;
							s.unshift({
								platname: "userbalance",
								name: "平台钱包"
							}), t.balancelists = s
						}
						t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				getbalancelist: function() {
					var t = this;
					t.$apiFun.post("/api/balancelist", {}).then(function(a) {
						200 !== a.code && t.showTost(0, a.message), 200 === a.code && (t.balancelist = a.data)
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				refreshusermoney: function() {
					var t = this;
					t.$apiFun.post("/api/refreshusermoney", {}).then(function(a) {
						t.hideLoading(), 200 == a.code && (localStorage.setItem("userInfo", n()(a.data)), t.$store.commit("changUserInfo"))
					})
				},
				transall: function() {
					var t = this;
					t.showLoading(), t.$apiFun.post("/api/transall", {}).then(function(a) {
						t.showTost(1, a.message), t.refreshusermoney(), t.getUserInfos(), t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				changeTasfer: function() {
					var t = this;
					t.showLoading();
					var a = JSON.parse(localStorage.getItem("userInfo")),
						s = a.transferstatus ? 0 : 1;
					t.$apiFun.post("/api/uptransferstatus", {
						transferstatus: s
					}).then(function(e) {
						200 != e.code && t.showTost(0, e.message), 200 == e.code && (a.transferstatus = s, localStorage.setItem("userInfo", n()(a)), t.$store.commit("changUserInfo"), t.showTost(1, "操作成功！")), t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				getBalances: function() {
					var t = this;
					t.showLoading(), t.$apiFun.post("/api/balance", {}).then(function(a) {
						if (401 == a.code && (localStorage.clear(), sessionStorage.clear(), t.$store.commit("changUserInfo"), t.$store.commit("changToken"), t.closeDaoTime(), t.$router.push({
							path: "/homes"
						})), 200 == a.code) {
							var s = JSON.parse(localStorage.getItem("userInfo"));
							s.balance = a.data.balance, localStorage.setItem("userInfo", n()(s)), t.$store.commit("changUserInfo")
						}
						t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				getUsercard: function() {
					var t = this;
					t.$apiFun.post("/api/getcard", {
						type: 1
					}).then(function(a) {
						200 == a.code && (t.usercardLis = a.data)
					})
				},
				withdraw: function() {
					var t = this,
						a = t.bankId,
						s = t.amount,
						e = t.password;
					s < 100 ? t.showTost(0, "单笔取款不能低于100元") : a ? e ? (t.showLoading(), t.$apiFun.post("/api/withdraw", {
							amount: s,
							bank: a,
							password: e
						}).then(function(a) {
							200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.showTost(1, "提交成功，等待后台审核"), t.amount = null, t.password = null, t.bank = null, setTimeout(function() {
								t.$router.push({
									path: "/fundingRecords"
								})
							}, 1500)), t.hideLoading()
						}).
						catch (function(a) {
							t.hideLoading()
						})) : t.showTost(0, "请输入您的支付密码") : t.showTost(0, "请选择您要提现到的银行卡")
				},
				withdraw1: function() {
					var t = this,
						a = t.bankId,
						s = t.amount,
						e = t.password;
					a ? s < 100 ? t.showTost(0, "单笔取款不能低于100元") : e ? (t.showLoading(), t.$apiFun.post("/api/withdraw", {
							amount: s,
							bank: a,
							password: e
						}).then(function(a) {
							200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.showTost(1, "提交成功，等待后台审核"), t.chanmeyXi = null, t.amount = null, t.password = null, t.bank = null, setTimeout(function() {
								t.$router.push({
									path: "/fundingRecords"
								})
							}, 1500)), t.hideLoading()
						}).
						catch (function(a) {
							t.hideLoading()
						})) : t.showTost(0, "请输入您的支付密码") : t.showTost(0, "请选择USDT地址")
				},
				changqutype: function(t) {
					this.qutype != t && (this.qutype = t, this.amount = null, this.password = null, this.bankId = null, this.chanmeyXi = null)
				},
				payTest: function() {
					var t = this,
						a = this,
						s = {};
					if ("bank" == a.pay_way) {
						if (s = {
							paytype: a.pay_way,
							amount: 1 * a.amount,
							bank: a.bankBox.bank,
							bank_address: a.bankBox.bank_address,
							bank_no: a.bankBox.bank_no,
							bank_owner: a.bankBox.bank_owner
						}, console.log(s), !s.bank_owner) return void a.showTost(0, "请输入存款人姓名");
						if (!s.bank) return void a.showTost(0, "请输入银行类型");
						if (!s.bank_no) return void a.showTost(0, "请输入银行卡号");
						if (!s.bank_address) return void a.showTost(0, "请输入银行开户行地址")
					} else s = {
						paytype: a.pay_way,
						amount: 1 * a.amount
					};
					"usdt" == a.pay_way && (s.catepay = a.meyXi), s.amount < a.min_price || s.amount > a.max_price ? a.showTost(0, "请输入金额在" + a.min_price + "-" + a.max_price + "之间！") : (a.showLoading(), s.paytype = "wechat" == s.paytype ? "wxpay" : s.paytype, a.$apiFun.post("/api/recharge", s).then(function(s) {
							if (console.log(s), 200 != s.code && a.showTost(0, s.message), 200 == s.code) {
								if (a.amount = null, "bank" == a.pay_way) return a.showTost(1, "提交成功，等待后台审核"), a.bankBox = {}, a.amount = null, $(".modal-backdrop").fadeOut(300), $("#deposit_popup").fadeOut(300), void a.hideLoading();
								a.bankBox = {}, a.amount = null, a.showTost(1, "正在跳转...");
								var e = t.$router.resolve({
									path: "/payInfo",
									query: {
										deposit_no: s.message
									}
								});
								window.open(e.href, "_blank"), $(".modal-backdrop").fadeOut(300), $("#deposit_popup").fadeOut(300)
							}
							a.hideLoading()
						}).
						catch (function(t) {
							a.hideLoading()
						}))
				},
				register: function() {
					var t = this,
						a = {};
					a.name = t.registerInfo.name || "", a.password = t.registerInfo.password || "", a.confirmPass = t.registerInfo.confirmPass || "", a.realname = t.registerInfo.realname || "", a.paypassword = t.registerInfo.paypassword || "";
					var s = t.registerInfo.code || "";
					if (0 != /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(a.name))
						if (0 != /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/.test(a.password))
							if (a.confirmPass == a.password)
								if (0 != /^[\u0391-\uFFE5a-zA-Z·&\\s]+$/.test(a.realname))
									if (0 != /^.{6,6}$/.test(a.paypassword)) {
										if (0 == /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,}$/.test(s) || s.toUpperCase() != t.imgLis[t.index]) return t.$parent.showTost(0, "验证码错误！"), t.registerInfo.code = "", void t.changIndex();
										t.showLoading(), t.pid && (a.pid = t.pid), t.$apiFun.register(a).then(function(a) {
											t.showTost(1, a.message), 200 == a.code ? (sessionStorage.setItem("token", a.data.api_token), t.$store.commit("changToken"), t.getUserInfos(), t.openDaoTime()) : (t.registerInfo.code = "", t.changIndex(), t.hideLoading())
										})
									} else t.$parent.showTost(0, "支付密码长度需是6位！");
									else t.$parent.showTost(0, "姓名格式不正确，可以是中，英文名称！");
									else t.$parent.showTost(0, "两次密码不一致！");
									else t.$parent.showTost(0, "密码长度最少8位！以字母和数字组合！");
									else t.$parent.showTost(0, " 用户名长度不得低于6位，以字母和数字组合！")
				},
				login: function() {
					var t = this,
						a = t.loginInfo;
					if (a.name && a.password) {
						var s = t.loginInfo.code;
						if (s) {
							if (s.toUpperCase() != t.imgLis[t.index]) return t.$parent.showTost(0, "验证码错误！"), t.loginInfo.code = null, void t.changIndex();
							t.showLoading(), t.$apiFun.login(a).then(function(a) {
								console.log(a), 200 !== a.code && (t.showTost(0, a.message), t.loginInfo.code = null, t.changIndex(), t.hideLoading()), 200 === a.code && (sessionStorage.setItem("token", a.data.api_token), t.$store.commit("changToken"), t.getUserInfos(), t.openDaoTime())
							})
						} else t.$parent.showTost(0, "请输入验证码！")
					} else t.showTost(0, "请输入您的账号和密码！")
				},
				homenotice: function() {
					var t = this;
					t.$apiFun.post("/api/homenotice", {}).then(function(a) {
						console.log(a), 200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.homenoticelis = a.data)
					})
				},
				getAgentLoginUrl: function() {
					this.showTost(1, "正在前往页面");
					var t = this.$router.resolve({
						path: "/gamePage",
						query: {
							dailiD: 1
						}
					});
					window.open(t.href, "_blank")
				},
				openDaoTime: function() {
					this.$parent.openDaoTime()
				},
				closeDaoTime: function() {
					this.$parent.closeDaoTime()
				},
				openGamePage: function(t, a, s) {
					if (sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "") {
						a = null == a ? 0 : a, this.showTost(1, "正在前往打开游戏页面");
						var e = this.$router.resolve({
							path: "/gamePage",
							query: {
								name: t,
								type: a,
								code: s
							}
						});
						window.open(e.href, "_blank")
					} else $("#login_popup").modal("show")
				},
				showLoading: function() {
					this.loading = !0
				},
				hideLoading: function() {
					this.loading = !1
				},
				goNav: function(t) {
					if ("/" == t) return t = "/homes", void this.$router.push({
						path: "/homes"
					});
					if ("/userredpackets" != t)
						if (t != this.$route.fullPath)
							if ("/app" != t) this.url = t, this.$router.push({
								path: t
							});
							else {
								var a = this.$router.resolve({
									path: "/app"
								});
								window.open(a.href, "_blank")
							} else {
								if ("/" == t) return;
								this.showTost(0, "已在当前页面！")
							} else {
								if (!this.$store.state.token) return void this.showTost(0, "请登录");
								var s = this.$router.resolve({
									path: "/userredpackets"
								});
								window.open(s.href, "_blank")
							}
				},
				openKefu: function() {
					var t = this;
					t.showTost(1, "正在链接人工客服"), t.$apiFun.post("/api/getservicerurl", {}).then(function(a) {
						200 != a.code && t.showTost(0, a.message), 200 == a.code && window.open(a.data.url)
					})
				},
				getUserInfo: function() {
					var t = this;
					t.$apiFun.post("/api/user", {}).then(function(a) {
						if (console.log(a), 200 !== a.code && t.showTost(0, a.message), 200 === a.code) {
							var s = a.data,
								e = s.current_vip,
								i = e.indexOf("P"),
								o = e.substr(i + 1, e.length);
							s.vip = o, localStorage.setItem("userInfo", n()(s)), t.userInfo = s, t.$store.commit("changUserInfo")
						}
					})
				},
				getUserInfos: function() {
					var t = this;
					t.showLoading(), t.$apiFun.post("/api/user", {}).then(function(a) {
						if (console.log(a), 200 !== a.code && t.showTost(0, a.message), 200 === a.code) {
							var s = a.data,
								e = s.current_vip,
								i = e.indexOf("P"),
								o = e.substr(i + 1, e.length);
							s.vip = o, localStorage.setItem("userInfo", n()(s)), t.userInfo = s, t.$store.commit("changUserInfo"), $("#login_popup").modal("hide"), $("#register_popup").modal("hide"), t.loginInfo.password = null, t.registerInfo = {}
						}
						t.hideLoading()
					})
				},
				showTost: function(t, a) {
					var s = t ? "success" : "warning";
					$("body").append('\n            <div class="alert_msg active delay toasted alert_msgss">\n            <div class="alert_msg_pos">\n            <div class="alert_msg_dialog">\n                <div class="alert_msg_header">\n                    <div id="alert_title">' + a + '</div>\n                    <div>\n                        <div id="alert_icon" class="ico-alert-' + s + '"></div>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>'), setTimeout('$(".alert_msgss").detach()', 2e3)
				},
				getBanklist: function() {
					var t = this;
					t.$apiFun.post("/api/banklist", {}).then(function(a) {
						200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.banklist = a.data), t.hideLoading()
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				getUsdssList: function() {
					var t = this;
					t.$apiFun.post("/api/getcard", {
						type: 2
					}).then(function(a) {
						200 == a.code && (t.usdssLis = a.data)
					})
				},
				getcard: function() {
					var t = this;
					t.showLoading(), t.$apiFun.post("/api/getpaybank", {}).then(function(a) {
						200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.cardLis = a.data, t.hideLoading())
					}).
					catch (function(a) {
						t.hideLoading()
					})
				},
				doCopy: function(t) {
					var a = document.createElement("input");
					a.style.opacity = "0", a.value = t, document.body.appendChild(a), a.select(), document.execCommand("copy"), this.showTost(1, "复制成功！")
				},
				showxiyiShow: function() {
					this.xiyiShow = !this.xiyiShow
				},
				changMeyXi: function(t) {
					this.meyXi != t && (this.meyXi = t, this.getPayRange())
				},
				getpayinfo: function(t) {
					var a = this;
					a.$apiFun.post("/api/payinfo", {
						deposit_no: t
					}).then(function(t) {
						console.log(t), 200 != t.code && a.showTost(0, t.message), 200 == t.code && (a.payInfo = t.data, a.step = 2), a.hideLoading()
					})
				},
				changPayway: function(t) {
					t != this.pay_way && (this.pay_way = t, this.bankBox = {}, this.step = 1, this.payInfo = {}, this.amount = null, this.getPayRange())
				},
				newgoNav: function(t, a) {
					this.path == t ? 1 == a ? $("#add_bankcard").addClass("active").addClass("delay") : $("#add_bankcards").addClass("active").addClass("delay") : ($(".modal").modal("hide"), this.goNav(t))
				}
			},
			beforeDestroy: function() {
				this.daoTime && clearInterval(this.daoTime), this.daoTime = null
			},
			watch: {
				$route: {
					immediate: !0,
					handler: function() {
						this.path = this.$route.path
					}
				}
			}
		}, m = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", [s("Header"), t._v(" "), s("router-view"), t._v(" "), s("Foot"), t._v(" "), t.$store.state.token ? s("div", {
						staticClass: "floating_menu"
					}, [s("div", {
						staticClass: "floating_menu_item"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", [s("button", {
						staticClass: "btn btn_white btn_style",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: function(a) {
								return t.focusTab("deposit")
							}
						}
					}, [t._v("存款")])]), t._v(" "), s("div", [s("button", {
						staticClass: "btn btn_white btn_style",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: function(a) {
								return t.focusTab("withdrawal")
							}
						}
					}, [t._v("取款")])]), t._v(" "), s("div", [s("button", {
						staticClass: "btn btn_white btn_style",
						attrs: {
							"data-toggle": "modal",
							"data-target": "#deposit_popup"
						},
						on: {
							click: t.openZhuanzhang
						}
					}, [t._v("转账")])])])]), t._v(" "), s("div", {
						staticClass: "floating_menu_item"
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "mr-3",
						on: {
							click: t.openKefu
						}
					}, [t._m(2)])])]), t._v(" "), s("div", {
						staticClass: "floating_menu_item"
					}, [t._m(3), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "index_APP_download_item"
					}, [s("div", [s("img", {
						attrs: {
							alt: "",
							src: t.$store.state.appInfo.ios_download_qrcode,
							onerror: "this.src = '/static/image/appurl.jpg'",
							width: "72"
						}
					})]), t._v(" "), s("div", [s("div", [t._v("扫码下载app")]), t._v(" "), s("a", {
						staticClass: "link",
						attrs: {
							href: "javascript:;",
							target: "_self"
						}
					}, [t._v(t._s(t.$store.state.appInfo.ios_download_url))])])])])])]) : t._e(), t._v(" "), s("div", {
						staticClass: "modal fade large wna_style",
						attrs: {
							id: "web_normal_announcement_popout"
						}
					}, [s("div", {
						staticClass: "modal-dialog",
						attrs: {
							role: "document"
						}
					}, [s("div", {
						staticClass: "modal-content announcement-modal-content"
					}, [t._m(4), t._v(" "), s("div", {
						staticClass: "modal-body"
					}, [s("div", {
						staticClass: "modal_wna_style_body"
					}, [s("div", {
						staticClass: "web_announcement_popup_title"
					}, [t._m(5), t._v(" "), s("div", {
						staticClass: "web_announcement_menulist"
					}, [s("ul", {
						staticClass: "normal_announcement_content"
					}, t._l(t.homenoticelis, function(a, e) {
						return s("li", {
							key: e,
							class: 0 == e ? "active" : "",
							attrs: {
								"data-announcement_id": "999"
							}
						}, [s("div", {
							staticClass: "normal_announcement_link"
						}, [s("div", [s("div", {
							staticClass: "normal_announcement_content_block"
						}, [s("div", {
							staticClass: "announcement_title"
						}, [t._v(t._s(a))])])]), t._v(" "), t._m(6, !0)])])
					}), 0)])]), t._v(" "), t._l(t.homenoticelis, function(a, e) {
						return s("div", {
							key: e,
							staticClass: "tab-content",
							style: 0 != e ? "display:none" : ""
						}, [t._m(7, !0), t._v(" "), s("div", {
							staticClass: "single_announcement_message"
						}, [t._v("\n                " + t._s(a) + "\n              ")]), t._v(" "), t._m(8, !0)])
					})], 2)])])])]), t._v(" "), s("div", {
						staticClass: "modal fade style2 large",
						attrs: {
							id: "deposit_popup"
						},
						on: {
							click: t.close
						}
					}, [s("div", {
						staticClass: "modal-dialog",
						attrs: {
							role: "document"
						},
						on: {
							click: function(a) {
								return a.stopPropagation(), t.closes.apply(null, arguments)
							}
						}
					}, [s("div", {
						staticClass: "modal-content"
					}, [s("div", {
						staticClass: "modal-header"
					}, [t._m(9), t._v(" "), s("nav", [s("div", {
						staticClass: "nav nav-tabs",
						attrs: {
							id: "nav-tab",
							role: "tablist"
						}
					}, [s("a", {
						staticClass: "nav-item nav-link active",
						attrs: {
							id: "nav-deposit-tab",
							"data-toggle": "tab",
							role: "tab",
							"aria-controls": "nav-deposit",
							"aria-selected": "true"
						},
						on: {
							click: function(a) {
								return t.focusTab("deposit")
							}
						}
					}, [t._v("存款")]), t._v(" "), s("a", {
						staticClass: "nav-item nav-link",
						attrs: {
							id: "nav-withdrawal-tab",
							"data-toggle": "tab",
							role: "tab",
							"aria-controls": "nav-withdrawal",
							"aria-selected": "false"
						},
						on: {
							click: function(a) {
								return t.focusTab("withdrawal")
							}
						}
					}, [t._v("取款")]), t._v(" "), s("a", {
						staticClass: "nav-item nav-link",
						attrs: {
							id: "nav-transfer-tab",
							"data-toggle": "tab",
							role: "tab",
							"aria-controls": "nav-transfer",
							"aria-selected": "false"
						},
						on: {
							click: function(a) {
								return t.focusTab("transfer")
							}
						}
					}, [t._v("转账")])])]), t._v(" "), s("div", {
						staticClass: "deposit_wallet_amount"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("打码量")]), t._v(" "), s("div", {
						staticClass: "main_wallet_bal",
						attrs: {
							id: "w_wallet_bal"
						}
					}, [t._v(t._s(t.betAmount))])]), t._v(" "), s("div", {
						staticClass: "deposit_wallet_amount",
						staticStyle: {
							"margin-left": "18px"
						}
					}, [s("div", {
						staticClass: "title"
					}, [t._v("主钱包总额")]), t._v(" "), s("div", {
						staticClass: "main_wallet_bal",
						attrs: {
							id: "w_wallet_bal"
						}
					}, [t._v(t._s(t.$store.state.userInfo.balance))]), t._v(" "), s("div", {
						staticClass: "amount_refresh"
					}, [s("img", {
						staticStyle: {
							cursor: "pointer"
						},
						attrs: {
							alt: "",
							src: "/static/image/refresh_w.png"
						},
						on: {
							click: t.getBalances
						}
					})])])]), t._v(" "), s("div", {
						staticClass: "modal-body"
					}, [s("div", {
						staticClass: "tab-content",
						attrs: {
							id: "nav-tabContent"
						}
					}, [s("div", {
						staticClass: "tab-pane fade",
						attrs: {
							id: "nav-deposit",
							role: "tabpanel",
							"aria-labelledby": "nav-deposit-tab"
						}
					}, [0 != t.usercardLis.length || 0 != t.usdssLis.length ? s("div", {
						staticClass: "deposit_method",
						staticStyle: {
							display: "flex"
						}
					}, [s("div", {
						staticClass: "deposit_method_list"
					}, [1 == t.payWayList.usdt ? s("div", {
						class: "usdt" == t.pay_way ? "deposit_method_item active" : "deposit_method_item",
						on: {
							click: function(a) {
								return t.changPayway("usdt")
							}
						}
					}, [t._m(10)]) : t._e(), t._v(" "), 1 == t.payWayList.card ? s("div", {
						class: "bank" == t.pay_way ? "deposit_method_item active" : "deposit_method_item",
						on: {
							click: function(a) {
								return t.changPayway("bank")
							}
						}
					}, [t._m(11)]) : t._e(), t._v(" "), 1 == t.payWayList.alipay ? s("div", {
						class: "alipay" == t.pay_way ? "deposit_method_item active" : "deposit_method_item",
						on: {
							click: function(a) {
								return t.changPayway("alipay")
							}
						}
					}, [t._m(12)]) : t._e(), t._v(" "), 1 == t.payWayList.wechat ? s("div", {
						class: "wechat" == t.pay_way ? "deposit_method_item active" : "deposit_method_item",
						on: {
							click: function(a) {
								return t.changPayway("wechat")
							}
						}
					}, [t._m(13)]) : t._e(), t._v(" "), s("div", {
						staticClass: "deposit_method_item",
						attrs: {
							"data-id": "10"
						},
						on: {
							click: t.openKefu
						}
					}, [s("div", {
						staticClass: "method_list"
					}, [s("div", {
						staticClass: "content_block"
					}, [t._m(14), t._v(" "), s("div", {
						staticClass: "desc"
					}, [t._v("若其他支付方式失败，建议您使用人工充值功能，由专人客服引导您进行充值。当前汇率: 1USDT≈" + t._s(t.$store.state.userInfo.usdtrate) + "CNY")])])])])]), t._v(" "), "usdt" == t.pay_way ? s("div", {
						staticClass: "deposit_info"
					}, [s("div", {
						staticClass: "deposit-container"
					}, [s("div", {
						staticClass: "deposit_detail"
					}, [s("div", {
						staticClass: "withdrawal_right"
					}, [s("div", {
						staticClass: "window_popup_content",
						attrs: {
							id: "deposit_payment"
						}
					}, [t._m(15), t._v(" "), t._m(16), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请输入取款金额 " + t.min_price + " - " + t.max_price
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), s("div", {
						staticClass: "wallet_item_area"
					}, [s("div", {
						staticClass: "wallet-items"
					}, [s("div", {
						staticClass: "wallet_label"
					}, [t._v("选择协议")]), t._v(" "), s("ul", {
						staticClass: "channel_items_container withdrawal_left",
						attrs: {
							id: "channel_items"
						}
					}, [s("li", {
						class: "ERC20" == t.meyXi ? "" : "active",
						on: {
							click: function(a) {
								return t.changMeyXi("ERC20")
							}
						}
					}, [t._v("ERC20")]), t._v(" "), s("li", {
						class: "TRC20" == t.meyXi ? "" : "active",
						on: {
							click: function(a) {
								return t.changMeyXi("TRC20")
							}
						}
					}, [t._v("TRC20")])])])]), t._v(" "), t._m(17), t._v(" "), s("div", {
						staticClass: "deposit_actual_hints deposit_rate"
					}), t._v(" "), s("div", {
						staticClass: "align_baseline"
					}, [s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "deposit_actual_received_container"
					}, [s("div", {
						staticClass: "actual_amount_left"
					}, [t._m(18), t._v(" "), s("div", {
						staticClass: "deposit_actual_received",
						attrs: {
							id: "actual_amount"
						}
					}, [t._v("≈ " + t._s(t.amount ? Math.floor(t.amount / t.$store.state.userInfo.usdtrate * 100) / 100 : "0.00") + " USDT")]), t._v(" "), s("div", {
						staticClass: "deposit_actual_received",
						attrs: {
							id: "actual_amount"
						}
					}, [t._v("参考汇率：" + t._s(t.$store.state.userInfo.usdtrate))])]), t._v(" "), s("div", [s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "payment"
						},
						on: {
							click: t.payTest
						}
					}, [t._v("立即存款")])])])])])])])])])]) : t._e(), t._v(" "), "bank" == t.pay_way ? s("div", {
						staticClass: "deposit_info"
					}, [s("div", {
						staticClass: "deposit-container"
					}, [s("div", {
						staticClass: "deposit_detail"
					}, [s("div", {
						staticClass: "withdrawal_right"
					}, [s("div", {
						staticClass: "window_popup_content",
						attrs: {
							id: "deposit_payment"
						}
					}, [t._m(19), t._v(" "), s("div", {
						staticClass: "JoiHTIGs"
					}, t._l(t.cardLis, function(a, e) {
						return s("div", {
							key: e,
							staticClass: "_1lgxzaTd VnPYo1MB _3jiVkBQ9"
						}, [s("p", {
							staticStyle: {
								"font-size": "10px",
								"line-height": "1.5",
								color: "#fff"
							}
						}, [t._v("收款银行：" + t._s(a.bank_data.bank_name))]), t._v(" "), s("p", {
							staticStyle: {
								"font-size": "10px",
								"line-height": "1.5",
								color: "#fff"
							}
						}, [t._v("账号：" + t._s(a.bank_no) + " "), s("img", {
							staticStyle: {
								width: "20px",
								float: "right"
							},
							attrs: {
								src: "/static/image/clongicon.png",
								alt: ""
							},
							on: {
								click: function(s) {
									return t.doCopy(a.bank_no)
								}
							}
						})]), t._v(" "), s("p", {
							staticStyle: {
								"font-size": "10px",
								"line-height": "1.5",
								color: "#fff"
							}
						}, [t._v("户名：" + t._s(a.bank_owner) + " "), s("img", {
							staticStyle: {
								width: "20px",
								float: "right"
							},
							attrs: {
								src: "/static/image/clongicon.png",
								alt: ""
							},
							on: {
								click: function(s) {
									return t.doCopy(a.bank_owner)
								}
							}
						})]), t._v(" "), s("p", {
							staticStyle: {
								"font-size": "10px",
								"line-height": "1.5",
								color: "#fff"
							}
						}, [t._v("银行地址：" + t._s(a.bank_address))])])
					}), 0), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container bank_label",
						attrs: {
							id: "pg_bank"
						}
					}, [s("div", [t._v("银行类型")]), t._v(" "), s("div", [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankBox.bank,
							expression: "bankBox.bank"
						}],
						staticClass: "form-control",
						attrs: {
							id: "pg_bank_select"
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.$set(t.bankBox, "bank", a.target.multiple ? s : s[0])
							}
						}
					}, t._l(t.banklist, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.bank_name
							}
						}, [t._v(t._s(a.bank_name))])
					}), 0)])]), t._v(" "), t._m(20), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankBox.bank_owner,
							expression: "bankBox.bank_owner"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请填写姓名"
						},
						domProps: {
							value: t.bankBox.bank_owner
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.bankBox, "bank_owner", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), t._m(21), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankBox.bank_no,
							expression: "bankBox.bank_no"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请填写卡号"
						},
						domProps: {
							value: t.bankBox.bank_no
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.bankBox, "bank_no", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), t._m(22), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankBox.bank_address,
							expression: "bankBox.bank_address"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请填写开户行"
						},
						domProps: {
							value: t.bankBox.bank_address
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.bankBox, "bank_address", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), t._m(23), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请输入取款金额 " + t.min_price + " - " + t.max_price
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), s("div", {
						staticClass: "deposit_actual_hints deposit_rate"
					}), t._v(" "), s("div", {
						staticClass: "align_baseline"
					}, [s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "deposit_actual_received_container"
					}, [s("div", {
						staticClass: "actual_amount_left"
					}), t._v(" "), s("div", [s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "payment"
						},
						on: {
							click: t.payTest
						}
					}, [t._v("立即存款")])])])])])])])])])]) : t._e(), t._v(" "), "alipay" == t.pay_way ? s("div", {
						staticClass: "deposit_info"
					}, [s("div", {
						staticClass: "deposit-container"
					}, [s("div", {
						staticClass: "deposit_detail"
					}, [s("div", {
						staticClass: "withdrawal_right"
					}, [s("div", {
						staticClass: "window_popup_content",
						attrs: {
							id: "deposit_payment"
						}
					}, [t._m(24), t._v(" "), t._m(25), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请输入取款金额 " + t.min_price + " - " + t.max_price
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), s("div", {
						staticClass: "deposit_actual_hints deposit_rate"
					}), t._v(" "), s("div", {
						staticClass: "align_baseline"
					}, [s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "deposit_actual_received_container"
					}, [s("div", {
						staticClass: "actual_amount_left"
					}), t._v(" "), s("div", [s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "payment"
						},
						on: {
							click: t.payTest
						}
					}, [t._v("立即存款")])])])])])])])])])]) : t._e(), t._v(" "), "wechat" == t.pay_way ? s("div", {
						staticClass: "deposit_info"
					}, [s("div", {
						staticClass: "deposit-container"
					}, [s("div", {
						staticClass: "deposit_detail"
					}, [s("div", {
						staticClass: "withdrawal_right"
					}, [s("div", {
						staticClass: "window_popup_content",
						attrs: {
							id: "deposit_payment"
						}
					}, [t._m(26), t._v(" "), t._m(27), t._v(" "), s("div", {
						staticClass: "deposit_method_amount_container"
					}, [s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "finance_amount",
						attrs: {
							id: "deposit_amount",
							type: "text",
							placeholder: "请输入取款金额 " + t.min_price + " - " + t.max_price
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})])]), t._v(" "), s("div", {
						staticClass: "deposit_actual_hints deposit_rate"
					}), t._v(" "), s("div", {
						staticClass: "align_baseline"
					}, [s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "deposit_actual_received_container"
					}, [s("div", {
						staticClass: "actual_amount_left"
					}), t._v(" "), s("div", [s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "payment"
						},
						on: {
							click: t.payTest
						}
					}, [t._v("立即存款")])])])])])])])])])]) : t._e()]) : s("div", {
						staticClass: "deposit_method",
						staticStyle: {
							display: "flex"
						}
					}, [s("div", {
						staticClass: "deposit_method_list"
					}), t._v(" "), s("div", {
						staticClass: "deposit_info"
					}, [s("div", {
						staticClass: "deposit-container"
					}, [s("div", {
						staticClass: "deposit_detail"
					}, [s("div", {
						staticClass: "withdrawal_right"
					}, [s("div", {
						staticClass: "window_popup_content",
						attrs: {
							id: "deposit_payment"
						}
					}, [t._m(28), t._v(" "), t._m(29), t._v(" "), s("div", {
						staticClass: "deposit_actual_hints deposit_rate"
					}), t._v(" "), s("div", {
						staticClass: "align_baseline"
					}, [s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "deposit_actual_received_container"
					}, [s("div", {
						staticClass: "actual_amount_left"
					}), t._v(" "), s("div", [s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "payment"
						},
						on: {
							click: t.goBsfgg
						}
					}, [t._v("前往绑定")])])])])])])])])])])])]), t._v(" "), s("div", {
						staticClass: "tab-pane fade",
						attrs: {
							id: "nav-withdrawal",
							role: "tabpanel",
							"aria-labelledby": "nav-withdrawal-tab"
						}
					}, [s("div", {
						staticClass: "withdrawal_detail"
					}, [t._m(30), t._v(" "), s("div", {
						staticClass: "withdrawal_right right_container"
					}, [s("div", {
						staticClass: "withdrawal_method swiper-container-initialized swiper-container-horizontal swiper-container-free-mode"
					}, [s("div", {
						staticClass: "swiper-wrapper"
					}, [s("div", {
						class: 0 == t.qutype ? "tab active" : "tab ",
						on: {
							click: function(a) {
								return t.changqutype(0)
							}
						}
					}, [t._v("银行卡")]), t._v(" "), s("div", {
						class: 1 == t.qutype ? "tab active" : "tab ",
						on: {
							click: function(a) {
								return t.changqutype(1)
							}
						}
					}, [t._v("电子钱包")])]), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "withdrawal_method_id",
							value: "1"
						}
					}), t._v(" "), s("span", {
						staticClass: "swiper-notification",
						attrs: {
							"aria-live": "assertive",
							"aria-atomic": "true"
						}
					})]), t._v(" "), s("div", {
						staticClass: "multi_withdrawal_method_session"
					}, [0 == t.qutype ? s("div", {
						staticClass: "withdrawal_method_session addBankCard active"
					}, [s("div", {
						staticClass: "withdrawal_content_container"
					}, [s("div", {
						staticClass: "wallet_title_label"
					}, [t._v("银行卡")]), t._v(" "), s("div", [t.usercardLis.length < 5 ? s("div", {
						staticClass: "btn_txt add_bankcard",
						attrs: {
							"data-redirect": "withdrawal"
						},
						on: {
							click: function(a) {
								return t.newgoNav("/bankCard", 1)
							}
						}
					}, [t._v("+ 添加银行卡")]) : t._e()])]), t._v(" "), t.usercardLis.length > 0 ? s("div", {
						staticClass: "withdrawal_bank_list withdrawal_textbox"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankId,
							expression: "bankId"
						}],
						staticClass: "form-control",
						attrs: {
							id: "pg_bank_select"
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.bankId = a.target.multiple ? s : s[0]
							}
						}
					}, t._l(t.usercardLis, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.id
							}
						}, [t._v(t._s(a.bank) + " ---" + t._s(a.bank_no))])
					}), 0)]) : t._e(), t._v(" "), s("div", {
						staticClass: "bankcard_error_message"
					})]) : t._e(), t._v(" "), 1 == t.qutype ? s("div", {
						staticClass: "withdrawal_method_session addDigitalWallet"
					}, [s("div", {
						staticClass: "withdrawal_content_container"
					}, [s("div", {
						staticClass: "wallet_title_label"
					}, [t._v("电子钱包")]), t._v(" "), s("div", [t.usdssLis.length < 5 ? s("div", {
						staticClass: "btn_txt add_bankcard add_crypto_wallet_btn",
						attrs: {
							"data-redirect": "withdrawal"
						},
						on: {
							click: function(a) {
								return t.newgoNav("/bankCard", 0)
							}
						}
					}, [t._v("+ 添加电子钱包")]) : t._e()])]), t._v(" "), t.usdssLis.length > 0 ? s("div", {
						staticClass: "withdrawal_bank_list withdrawal_textbox"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.bankId,
							expression: "bankId"
						}],
						staticClass: "form-control",
						attrs: {
							id: "pg_bank_select"
						},
						on: {
							change: [
								function(a) {
									var s = Array.prototype.filter.call(a.target.options, function(t) {
										return t.selected
									}).map(function(t) {
										return "_value" in t ? t._value : t.value
									});
									t.bankId = a.target.multiple ? s : s[0]
								},
								t.changApiType
							]
						}
					}, t._l(t.usdssLis, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.id
							}
						}, [t._v(t._s(a.bank_owner) + "---" + t._s(a.bank_no))])
					}), 0)]) : t._e(), t._v(" "), s("div", {
						staticClass: "ewallet_error_message"
					})]) : t._e(), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "bank_wallet_id_2"
						}
					})]), t._v(" "), t._m(31), t._v(" "), s("form", {
						staticClass: "form-horizontal",
						attrs: {
							method: "post",
							id: "withdrawal_form"
						}
					}, [s("div", {
						staticClass: "textbox_content withdrawal_textbox withdrawal_input"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "numeric",
						attrs: {
							type: "number",
							placeholder: "请输入取款金额",
							name: "amount",
							id: "amount"
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					}), t._v(" "), t._m(32), t._v(" "), s("div", {
						staticClass: "error_msg"
					})]), t._v(" "), t._m(33), t._v(" "), s("div", {
						staticClass: "textbox_content withdrawal_textbox"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.password,
							expression: "password"
						}],
						staticClass: "numeric",
						attrs: {
							type: "password",
							placeholder: "取款密码",
							name: "withdrawal_pin",
							id: "withdrawal_pin"
						},
						domProps: {
							value: t.password
						},
						on: {
							input: function(a) {
								a.target.composing || (t.password = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg"
					})]), t._v(" "), 1 == t.qutype ? s("div", {
						staticStyle: {
							"margin-top": "30px"
						}
					}, [s("div", {
						staticClass: "textbox_content withdrawal_textbox"
					}, [t.chanmeyXi ? s("p", [t._v("每笔手续费: " + t._s("ERC20" == t.chanmeyXi ? t.$store.state.userInfo.withdrawcashfee : t.$store.state.userInfo.withdrawfeeusdttrc) + " USDT")]) : t._e(), t._v(" "), s("p", [t._v("USDT换算: ≈ " + t._s(t.amount ? Math.floor(t.amount / t.$store.state.userInfo.withdrawusdtrate * 100) / 100 : "0.00") + " USDT 参考汇率：" + t._s(t.$store.state.userInfo.withdrawusdtrate))])])]) : t._e(), t._v(" "), t._m(34), t._v(" "), s("div", {
						staticClass: "bottom_deposit_amount"
					}, [s("div", {
						staticClass: "actual_amount_container"
					}, [1 == t.qutype ? s("div", {
						staticClass: "amount_container"
					}, [t._m(35), t._v(" "), s("div", {
						staticClass: "withdrawal_actual_amount"
					}, [s("div", {
						staticClass: "actual_amount"
					}, [t._v(t._s(t.amount ? Math.floor(t.amount / t.$store.state.userInfo.withdrawusdtrate * 100) / 100 - ("ERC20" == t.chanmeyXi ? 1 * t.$store.state.userInfo.withdrawcashfee : 1 * t.$store.state.userInfo.withdrawfeeusdttrc) : "0.00"))])])]) : s("div", {
						staticClass: "amount_container"
					}), t._v(" "), s("div", [0 == t.qutype ? s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "withdrawal_btn"
						},
						on: {
							click: t.withdraw
						}
					}, [t._v("立即取款")]) : t._e(), t._v(" "), 1 == t.qutype ? s("button", {
						staticClass: "btn_deposit btn_major",
						attrs: {
							type: "button",
							id: "withdrawal_btn"
						},
						on: {
							click: t.withdraw1
						}
					}, [t._v("立即取款")]) : t._e()])])])])])]), t._v(" "), t._m(36), t._v(" "), t._m(37), t._v(" "), s("div", {
						staticClass: "cgpay_enable"
					})]), t._v(" "), s("div", {
						staticClass: "tab-pane fade",
						attrs: {
							id: "nav-transfer",
							role: "tabpanel",
							"aria-labelledby": "nav-transfer-tab"
						}
					}, [s("div", {
						staticClass: "transfer_detail"
					}, [s("div", {
						staticClass: "transfer_left left_container"
					}, [s("div", {
						staticClass: "one_key_recovery_container"
					}, [s("div", {
						staticClass: "transfer_main_wallet"
					}, [s("div", {
						staticClass: "main_wallet_onekey"
					}, [s("button", {
						staticClass: "btn_minor",
						attrs: {
							type: "button",
							id: "oneKeyRecovery"
						},
						on: {
							click: t.transall
						}
					}, [t._v("一键回收")])])]), t._v(" "), t._m(38)]), t._v(" "), t._l(t.balancelist, function(a, e) {
						return 0 != e ? s("div", {
							key: e,
							staticClass: "transfer_wallet_list",
							attrs: {
								id: "transfer_acct"
							}
						}, [s("div", {
							staticClass: "content_block transfer_block",
							attrs: {
								"data-withdrawal": "false"
							}
						}, [s("div", {
							staticClass: "title"
						}, [s("div", {
							staticClass: "game_title",
							attrs: {
								title: a.name
							}
						}, [t._v(t._s(a.name))])]), t._v(" "), s("div", {
							staticClass: "amount_transfer_container"
						}, [s("div", {
							staticClass: "tooltips_container"
						}), t._v(" "), s("div", {
							staticClass: "amount"
						}, [s("div", {
							attrs: {
								id: "t_gw_2_balance"
							}
						}, [t._v(t._s(a.balance))])]), t._v(" "), 0 == t.$store.state.userInfo.transferstatus ? s("div", {
							staticClass: "transfer_action"
						}, [1 * t.$store.state.userInfo.balance <= 0 ? s("a", {
							staticClass: "icon_circle_card mini white trans_allin disable"
						}) : s("a", {
							staticClass: "icon_circle_card mini white trans_allin",
							on: {
								click: function(s) {
									return t.changVal(0, a.platname)
								}
							}
						}), t._v(" "), 1 * a.balance <= 0 ? s("a", {
							staticClass: "icon_circle_card mini white trans_allout disable"
						}) : s("a", {
							staticClass: "icon_circle_card mini white trans_allout",
							on: {
								click: function(s) {
									return t.changVal(1, a.platname)
								}
							}
						})]) : t._e()])])]) : t._e()
					})], 2), t._v(" "), s("div", {
						staticClass: "right_container"
					}, [s("div", {
						staticClass: "wallet_right_top"
					}, [s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "auto_transfer_btn"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("免转")]), t._v(" "), s("div", {
						class: 0 == t.$store.state.userInfo.transferstatus ? "toggle_text_btn left" : "toggle_text_btn right",
						attrs: {
							id: "transfer_mode"
						},
						on: {
							click: t.changeTasfer
						}
					}, [s("span"), t._v(" "), s("span")])]), t._v(" "), s("div", {
						staticClass: "total_amount_wallet_transfer"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("游戏余额")]), t._v(" "), s("div", {
						attrs: {
							id: "all_wallet_balance"
						}
					}, [t._v(t._s(t.$store.state.userInfo.gameblance))])])])]), t._v(" "), 0 == t.$store.state.userInfo.transferstatus ? s("div", {
						staticClass: "transfer_adjust_form"
					}, [s("div", [s("div", {
						staticClass: "title"
					}, [t._v("转出")]), t._v(" "), s("div", {
						staticClass: "transfer_select_container"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.sourcetype,
							expression: "sourcetype"
						}],
						staticClass: "transfer_selection",
						attrs: {
							id: "transfer_from"
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.sourcetype = a.target.multiple ? s : s[0]
							}
						}
					}, t._l(t.balancelists, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.platname
							}
						}, [t._v(t._s(a.name))])
					}), 0)])]), t._v(" "), s("div", [s("div", {
						staticClass: "title"
					}, [t._v("转入")]), t._v(" "), s("div", {
						staticClass: "transfer_select_container"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.targettype,
							expression: "targettype"
						}],
						staticClass: "transfer_selection",
						attrs: {
							id: "transfer_to"
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.targettype = a.target.multiple ? s : s[0]
							}
						}
					}, t._l(t.balancelists, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.platname
							}
						}, [t._v(t._s(a.name))])
					}), 0)])]), t._v(" "), s("div", {
						staticClass: "transfer_amount_container"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("转账金额")]), t._v(" "), s("div", [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.amount,
							expression: "amount"
						}],
						staticClass: "form-contorl transfer_amount finance_amount",
						attrs: {
							type: "number",
							placeholder: "请填写转账金额",
							id: "transfer_amount"
						},
						domProps: {
							value: t.amount
						},
						on: {
							input: function(a) {
								a.target.composing || (t.amount = a.target.value)
							}
						}
					})])]), t._v(" "), s("div", {
						staticClass: "hints"
					}, [t._v("温馨提示：转账可能因平台政策，出现无法转入或转出之情形，如有任何疑问，敬请联系客服为您服务。")]), t._v(" "), s("div", {
						staticClass: "right_bottom_transfer"
					}, [s("div", {
						staticClass: "transfer_btn_container"
					}, [s("button", {
						staticClass: "transfer_button btn_major",
						attrs: {
							id: "transfer_btn"
						},
						on: {
							click: t.isOk
						}
					}, [t._v("转账")])])])]) : t._e()])]), t._v(" "), t._m(39)])])])])])]), t._v(" "), s("div", {
						staticClass: "modal fade middle",
						attrs: {
							id: "login_popup"
						}
					}, [s("div", {
						staticClass: "modal-dialog",
						attrs: {
							role: "document"
						}
					}, [s("div", {
						staticClass: "modal-content"
					}, [s("div", {
						staticClass: "modal-body"
					}, [s("div", {
						staticClass: "login_popup_container"
					}, [s("div", {
						staticClass: "login_popup_content"
					}, [s("div", {
						staticClass: "content_block"
					}, [t._m(40), t._v(" "), s("form", {
						staticClass: "form-horizontal",
						attrs: {
							method: "post",
							id: "login_form"
						}
					}, [s("div", {
						staticClass: "login_popup_textbox login_username"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.loginInfo.name,
							expression: "loginInfo.name"
						}],
						staticClass: "form-control userEmail un",
						attrs: {
							type: "text",
							placeholder: "请输入帐号",
							name: "username",
							id: "username",
							maxlength: "16"
						},
						domProps: {
							value: t.loginInfo.name
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.loginInfo, "name", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/username.png"
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg error_login_username"
					})]), t._v(" "), s("label", {
						staticClass: "textbox_content login_popup_textbox"
					}, [s("div", {
						staticClass: "toggle_password login_popup_password",
						attrs: {
							toggle: "#password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.loginInfo.password,
							expression: "loginInfo.password"
						}],
						staticClass: "form-control userPassword pw",
						attrs: {
							type: "password",
							placeholder: "请输入密码",
							maxlength: "15"
						},
						domProps: {
							value: t.loginInfo.password
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.loginInfo, "password", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/password.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_login_password"
					})]), t._v(" "), s("div", {
						staticClass: "login_popup_textbox login_username",
						staticStyle: {
							display: "flex",
							"align-items": "center"
						}
					}, [s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/referral.png"
						}
					}), t._v(" "), s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.loginInfo.code,
							expression: "loginInfo.code"
						}],
						staticClass: "form-control userEmail un",
						staticStyle: {
							flex: "1"
						},
						attrs: {
							type: "text",
							placeholder: "请输入验证码",
							maxlength: "16"
						},
						domProps: {
							value: t.loginInfo.code
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.loginInfo, "code", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticStyle: {
							cursor: "pointer",
							height: "43px"
						},
						attrs: {
							src: "/static/image/yzm/" + t.imgLis[t.index] + ".png",
							alt: ""
						},
						on: {
							click: t.changIndex
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg error_login_username"
					})]), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							name: "language",
							id: "language",
							value: "zh_hans"
						}
					}), t._v(" "), s("div", {
						staticClass: "form_inline remember_me"
					}, [t._m(41), t._v(" "), s("a", {
						on: {
							click: t.openKefu
						}
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/forgot_icon.png"
						}
					}), s("span", [t._v("忘记密码")])])]), t._v(" "), s("div", {
						staticClass: "error_msg error_login"
					}), t._v(" "), s("button", {
						staticClass: "btn btn-block",
						staticStyle: {
							width: "100%",
							background: "#464646"
						},
						attrs: {
							type: "button",
							id: "login_popup_btn"
						},
						on: {
							click: t.login
						}
					}, [t._v("登录")])])])])])])])])]), t._v(" "), s("div", {
						staticClass: "modal fade middle",
						attrs: {
							id: "register_popup"
						}
					}, [s("div", {
						staticClass: "modal-dialog",
						attrs: {
							role: "document"
						}
					}, [s("div", {
						staticClass: "modal-content"
					}, [s("div", {
						staticClass: "modal-body",
						attrs: {
							id: "nav-register"
						}
					}, [s("div", {
						staticClass: "register_popup_container"
					}, [s("div", {
						staticClass: "register_popup_content"
					}, [s("div", {
						staticClass: "content_block"
					}, [t._m(42), t._v(" "), s("form", {
						staticClass: "form-horizontal",
						attrs: {
							method: "post",
							id: "register_form"
						}
					}, [s("div", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.name,
							expression: "registerInfo.name"
						}],
						staticClass: "form-control userEmail un rinput",
						attrs: {
							type: "text",
							placeholder: "请输入账号（最少6位，英文及数字）",
							readonly: "",
							onfocus: "this.removeAttribute('readonly');",
							onblur: "this.setAttribute('readonly',true);",
							name: "username",
							id: "r_username",
							maxlength: "16"
						},
						domProps: {
							value: t.registerInfo.name
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "name", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/username.png"
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg error_username"
					})]), t._v(" "), s("label", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#r_password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.password,
							expression: "registerInfo.password"
						}],
						staticClass: "form-control userPassword pw rinput",
						attrs: {
							type: "password",
							placeholder: "请输入密码（至少8位，英文及数字）",
							name: "password",
							autocomplete: "new-password",
							maxlength: "15"
						},
						domProps: {
							value: t.registerInfo.password
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "password", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/password.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_password"
					})]), t._v(" "), s("div", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.confirmPass,
							expression: "registerInfo.confirmPass"
						}],
						staticClass: "form-control rererralCode rr",
						attrs: {
							value: "",
							placeholder: "请再次输入账号密码",
							name: "referral_code",
							type: "password"
						},
						domProps: {
							value: t.registerInfo.confirmPass
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "confirmPass", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/referral.png"
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg error_referral_code"
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							value: "99559500.com"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							value: ""
						}
					})]), t._v(" "), s("div", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.realname,
							expression: "registerInfo.realname"
						}],
						staticClass: "form-control rererralCode rr",
						attrs: {
							value: "",
							placeholder: "请输入真实姓名",
							name: "referral_code",
							type: "text"
						},
						domProps: {
							value: t.registerInfo.realname
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "realname", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/captcha.png"
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg error_referral_code"
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							value: "99559500.com"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							value: ""
						}
					})]), t._v(" "), s("label", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#r_password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.paypassword,
							expression: "registerInfo.paypassword"
						}],
						staticClass: "form-control userPassword pw rinput",
						attrs: {
							type: "password",
							placeholder: "请输入6位取款密码",
							maxlength: "6"
						},
						domProps: {
							value: t.registerInfo.paypassword
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "paypassword", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/password.png"
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_password"
					})]), t._v(" "), s("label", {
						staticClass: "register_popup_textbox textbox_content"
					}, [s("div", {
						staticClass: "toggle_password",
						staticStyle: {
							display: "flex",
							"align-items": "center"
						},
						attrs: {
							toggle: "#r_password"
						}
					}, [s("img", {
						staticClass: "icon",
						attrs: {
							alt: "",
							src: "/static/image/referral.png"
						}
					}), t._v(" "), s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.registerInfo.code,
							expression: "registerInfo.code"
						}],
						staticClass: "form-control userPassword pw rinput",
						attrs: {
							type: "text",
							placeholder: "请输入验证码",
							maxlength: "4"
						},
						domProps: {
							value: t.registerInfo.code
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.registerInfo, "code", a.target.value)
							}
						}
					}), t._v(" "), s("img", {
						staticStyle: {
							cursor: "pointer",
							height: "43px"
						},
						attrs: {
							src: "/static/image/yzm/" + t.imgLis[t.index] + ".png",
							alt: ""
						},
						on: {
							click: t.changIndex
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_password"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg submit_error_msg"
					}), t._v(" "), s("button", {
						staticClass: "btn btn-block",
						staticStyle: {
							width: "100%"
						},
						attrs: {
							type: "button",
							id: "login_popup_btn"
						},
						on: {
							click: t.register
						}
					}, [t._v("注册")])])])])])])])])]), t._v(" "), t.loading ? s("div", {
						attrs: {
							id: "loading_screen"
						}
					}, [t._m(43)]) : t._e()], 1)
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "float_menu_icon wallet"
						}), this._v(" "), a("div", [this._v("钱包")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "float_menu_icon cs"
						}, [a("img", {
							attrs: {
								src: "/static/image/floatnav_cs.png"
							}
						})]), this._v(" "), a("div", [this._v("客服")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("a", {
							staticClass: "float_menu_link csLink"
						}, [a("div", {
							staticClass: "float_menu_icon subcs mx-auto"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/floatnav_cs.png",
								width: "24"
							}
						})]), this._v(" "), a("div", [this._v("客服1")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_block"
						}, [a("div", [a("img", {
							staticClass: "floating_menu_app_download",
							attrs: {
								alt: "",
								src: "/static/image/floatnav_appdownload.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "floating_menu_app_download_text"
						}, [this._v("\n          APP"), a("br"), this._v("\n          下载\n        ")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "modal-header announcement-modal-header"
						}, [a("button", {
							staticClass: "modal_close_btn",
							attrs: {
								type: "button",
								"data-dismiss": "modal",
								"aria-label": "Close"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "block_content"
						}, [a("div", {
							staticClass: "title"
						}, [a("b", [this._v("最新")]), this._v("公告")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "announcement_arrow"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "single_announcement_title"
						}, [a("div", {
							staticClass: "single_announcement_header"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "single_announcement_message"
						}, [a("img", {
							staticClass: "single_announcement_image",
							attrs: {
								src: ""
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("div", {
							staticClass: "icon"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/wallet_bg.png"
							}
						})]), this._v("\n            钱包\n          ")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "method_list"
						}, [a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "method_name"
						}, [a("div", {
							staticClass: "mb-0"
						}, [a("img", {
							staticClass: "deposit_method_icon",
							attrs: {
								alt: "",
								src: "/static/image/1612269904-2-数字货币-图标.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("数字货币")])]), this._v(" "), a("div", {
							staticClass: "desc"
						}, [this._v("USDT钱包充值")])]), this._v(" "), a("div", {
							staticClass: "content_block"
						}, [a("span", {
							staticClass: "recommend"
						}, [this._v("推荐")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "method_list"
						}, [a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "method_name"
						}, [a("div", {
							staticClass: "mb-0"
						}, [a("img", {
							staticClass: "deposit_method_icon",
							attrs: {
								alt: "",
								src: "/static/image/1610265055-0-pay_unionpay.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("银联")])]), this._v(" "), a("div", {
							staticClass: "desc"
						}, [this._v("银行卡充值")])]), this._v(" "), a("div", {
							staticClass: "content_block"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "method_list"
						}, [a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "method_name"
						}, [a("div", {
							staticClass: "mb-0"
						}, [a("img", {
							staticClass: "deposit_method_icon",
							attrs: {
								alt: "",
								src: "/static/image/d3.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("支付宝")])]), this._v(" "), a("div", {
							staticClass: "desc"
						}, [this._v("可扫码支付")])]), this._v(" "), a("div", {
							staticClass: "content_block"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "method_list"
						}, [a("div", {
							staticClass: "content_block"
						}, [a("div", {
							staticClass: "method_name"
						}, [a("div", {
							staticClass: "mb-0"
						}, [a("img", {
							staticClass: "deposit_method_icon",
							attrs: {
								alt: "",
								src: "/static/image/weilog1515.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("微信")])]), this._v(" "), a("div", {
							staticClass: "desc"
						}, [this._v("可扫码支付")])]), this._v(" "), a("div", {
							staticClass: "content_block"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "method_name"
						}, [a("div", {
							staticClass: "mb-0"
						}, [a("img", {
							staticClass: "deposit_method_icon",
							attrs: {
								alt: "",
								src: "/static/image/1612080482-2-online_recommend.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("人工充值")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area"
						}, [a("div", {
							staticClass: "wallet-items"
						}, [a("div", {
							staticClass: "wallet_label"
						}, [this._v("虚拟币存款")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款金额 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "channel_remark"
						}, [this._v("YYF：请选择对应的钱包协议，否则造成损失需会员自行承担！")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "remarks_title_label"
						}, [this._v("\n                                    实际到账\n                                    "), a("div", {
							staticClass: "remarks_tooltips",
							attrs: {
								id: ""
							}
						}, [a("label", {}, [a("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/wallet/info.png"
							}
						}), a("input", {
							attrs: {
								type: "checkbox"
							}
						}), a("span", {
							staticClass: "deposit_actual_hints"
						}, [this._v("温馨提示：优惠方案将已实际到账金额为准。")])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area"
						}, [a("div", {
							staticClass: "wallet-items"
						}, [a("div", {
							staticClass: "wallet_label"
						}, [this._v("银行卡存款")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款姓名 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款卡号 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("开户行 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款金额 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area"
						}, [a("div", {
							staticClass: "wallet-items"
						}, [a("div", {
							staticClass: "wallet_label"
						}, [this._v("支付宝存款")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款金额 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area"
						}, [a("div", {
							staticClass: "wallet-items"
						}, [a("div", {
							staticClass: "wallet_label"
						}, [this._v("微信存款")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("汇款金额 "), a("span", {
							staticClass: "bank_hints",
							attrs: {
								id: "channel_limit_text"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area"
						}, [a("div", {
							staticClass: "wallet-items"
						}, [a("div", {
							staticClass: "wallet_label"
						}, [this._v("温馨提示")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("您还为绑定任何钱包卡片，请前往绑定！")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_item_area withdrawal_left left_container"
						}, [a("div", {
							staticClass: "one_key_recovery_container"
						}, [a("div", {
							staticClass: "hints"
						}, [this._v("温馨提示：尚有余额之游戏平台，可能因平台政策因素，无法将余额全数返还至主钱包中。")])]), this._v(" "), a("div", {
							attrs: {
								id: "all_wallets"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "withdrawal_content_container first_line",
							staticStyle: {
								"margin-top": "20px"
							}
						}, [a("div", {
							staticClass: "remarks_title_label"
						}, [this._v("\n                      取款金额\n                      "), a("div", {
							staticClass: "remarks_tooltips top_tooltips",
							attrs: {
								id: ""
							}
						}, [a("label", {}, [a("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/wallet/info.png",
								loading: "lazy"
							}
						}), a("input", {
							attrs: {
								type: "checkbox"
							}
						}), a("span", {
							staticClass: "deposit_actual_hints"
						}, [this._v("温馨提示：尚有余额之游戏平台，可能因平台政策因素，无法将余额全数返还至主钱包中。")])])])]), this._v(" "), a("div")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "d-flex align-items-center justify-content-between withdrawal_crypto_info"
						}, [a("div", {
							staticClass: "w-50"
						}, [a("span", {
							staticClass: "rate"
						})]), this._v(" "), a("div", [a("span", {
							attrs: {
								id: "timer"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "withdrawal_content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						}, [this._v("取款密码")]), this._v(" "), a("div")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "withdrawal_content_container"
						}, [a("div", {
							staticClass: "wallet_title_label"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "remarks_title_label"
						}, [this._v("\n                            实际到账\n                            "), a("div", {
							staticClass: "remarks_tooltips",
							attrs: {
								id: ""
							}
						}, [a("label", {}, [a("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/wallet/info.png",
								loading: "lazy"
							}
						}), a("input", {
							attrs: {
								type: "checkbox"
							}
						}), a("span", {
							staticClass: "deposit_actual_hints"
						}, [this._v("温馨提示：优惠方案将已实际到账金额为准。")])])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "turnover_details"
						}, [s("div", {
							staticClass: "turnover_top"
						}, [s("div", {
							staticClass: "content_block turnover_details_onoff"
						}, [s("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/general/arrow_left.png",
								loading: "lazy"
							}
						}), t._v(" "), s("div", {
							staticClass: "btn_txt"
						}, [t._v("返回")])]), t._v(" "), s("div", {
							staticClass: "turnover_details_topbox"
						}, [s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title"
						}, [t._v("剩余流水")]), t._v(" "), s("div", {
							staticClass: "number"
						}, [t._v("0.00")])]), t._v(" "), s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title_alt"
						}, [t._v("已达流水")]), t._v(" "), s("div", {
							staticClass: "number_alt"
						}, [t._v("0.00")])]), t._v(" "), s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title_alt"
						}, [t._v("需达流水")]), t._v(" "), s("div", {
							staticClass: "number_alt"
						}, [t._v("0.00")])])])]), t._v(" "), s("div", {
							staticClass: "turnover_details_body"
						}, [s("div", {
							staticClass: "turnover_details_right"
						}, [s("table", {
							staticClass: "table"
						}, [s("thead", [s("tr", [s("th", {
							staticClass: "left"
						}, [t._v("全部")]), t._v(" "), s("th", {
							staticClass: "left"
						}, [t._v("注单号")]), t._v(" "), s("th", {
							staticClass: "left"
						}, [t._v("游戏平台")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("金额")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("需达流水")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("已达流水")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("剩余流水")])])]), t._v(" "), s("tbody", [s("tr", [s("td", {
							attrs: {
								colspan: "7"
							}
						}, [t._v("暂无数据")])])])])])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "modal fade large",
							attrs: {
								id: "fee_detail"
							}
						}, [s("div", {
							staticClass: "modal-dialog",
							attrs: {
								role: "document"
							}
						}, [s("div", {
							staticClass: "modal-content"
						}, [s("div", {
							staticClass: "modal-header"
						}, [s("div", {
							staticClass: "popup_title"
						}), t._v(" "), s("button", {
							staticClass: "close",
							attrs: {
								type: "button",
								"aria-label": "Close"
							}
						}, [s("span", [t._v("×")])])]), t._v(" "), s("div", {
							staticClass: "modal-body"
						}, [s("div", {
							staticClass: "withdrawal_fee"
						}, [t._v("总费用 (0.00)元")]), t._v(" "), s("div", {
							staticClass: "fee_list"
						}, [s("div", [t._v("行政费 0.00 元")]), t._v(" "), s("div", [t._v("手续费 "), s("span", {
							staticClass: "handling_fee"
						}, [t._v("0.00")]), t._v(" 元")]), t._v(" "), s("div", [t._v("优惠扣除 0.00 元")])]), t._v(" "), s("div", {
							staticClass: "turnover"
						}, [t._v("需达流水 0.00")]), t._v(" "), s("table", {
							staticClass: "table"
						}, [s("tbody", [s("tr", [s("th", {
							attrs: {
								colspan: "7"
							}
						}, [t._v("流水详情")])]), t._v(" "), s("tr", [s("th", [t._v("流水类型")]), t._v(" "), s("th", [t._v("流水名称")]), t._v(" "), s("th", [t._v("流水交易号")]), t._v(" "), s("th", [t._v("金额")]), t._v(" "), s("th", [t._v("流水需求")]), t._v(" "), s("th", [t._v("已达流水")]), t._v(" "), s("th", [t._v("剩余流水")])])])])])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "transfer_main_wallet_shortcut"
						}, [a("div", {
							staticClass: "text"
						}, [this._v("快捷键")]), this._v(" "), a("div", {
							staticClass: "instrustion"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/allin_remark.png"
							}
						}), this._v(" 一键转入指定游戏钱包")]), this._v(" "), a("div", {
							staticClass: "instrustion mr-2"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/allout_remark.png"
							}
						}), this._v(" 一键转回主钱包")]), this._v(" "), a("div", {
							staticClass: "instrustion"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/allout_disabled_remark.png"
							}
						}), this._v(" 暂时无法转出")])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "turnover_details"
						}, [s("div", {
							staticClass: "wallet_top"
						}, [s("div", {
							staticClass: "content_block turnover_details_onoff"
						}, [s("div", [t._v("流水详情")]), t._v(" "), s("img", {
							attrs: {
								alt: "",
								src: "/static/image/slide_right_alt.png"
							}
						})])]), t._v(" "), s("div", {
							staticClass: "turnover_details_body"
						}, [s("div", {
							staticClass: "turnover_details_leftbox"
						}, [s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title"
						}, [t._v("剩余流水")]), t._v(" "), s("div", {
							staticClass: "number"
						}, [t._v("0.00")])]), t._v(" "), s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title"
						}, [t._v("已达流水")]), t._v(" "), s("div", {
							staticClass: "number"
						}, [t._v("0.00")])]), t._v(" "), s("div", {
							staticClass: "content_block"
						}, [s("div", {
							staticClass: "title"
						}, [t._v("需达流水")]), t._v(" "), s("div", {
							staticClass: "number"
						}, [t._v("0.00")])])]), t._v(" "), s("div", {
							staticClass: "turnover_details_right"
						}, [s("table", {
							staticClass: "table"
						}, [s("thead", [s("tr", [s("th", {
							staticClass: "left"
						}, [t._v("全部")]), t._v(" "), s("th", {
							staticClass: "left"
						}, [t._v("注单号")]), t._v(" "), s("th", {
							staticClass: "left"
						}, [t._v("游戏平台")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("金额")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("需达流水")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("已达流水")]), t._v(" "), s("th", {
							staticClass: "right"
						}, [t._v("剩余流水")])])]), t._v(" "), s("tbody", [s("tr", [s("td", {
							attrs: {
								colspan: "7"
							}
						}, [t._v("暂无数据")])])])]), t._v(" "), s("div", {
							staticClass: "to_top"
						}, [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/gotop.svg"
							}
						})])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "login_or_register"
						}, [a("div", {
							staticClass: "login_popup_title"
						}, [this._v("登录")]), this._v(" "), a("div", [a("a", {
							staticClass: "login_popup_gotoregister",
							attrs: {
								onclick: "$('#login_popup').modal('hide'); focusTab('register');",
								"data-toggle": "modal",
								"data-target": "#register_popup"
							}
						}, [a("div", [this._v("注册")])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("label", {
							staticClass: "label-cbx",
							attrs: {
								for: "remember_me"
							}
						}, [a("div", {
							staticClass: "checkbox"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "login_or_register"
						}, [a("div", [a("a", {
							staticClass: "register_popup_gotologin",
							attrs: {
								onclick: "$('#register_popup').modal('hide');",
								"data-toggle": "modal",
								"data-target": "#login_popup"
							}
						}, [a("div", [this._v("登录")])])]), this._v(" "), a("div", {
							staticClass: "register_popup_title"
						}, [this._v("注册")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "lds-ring large"
						}, [a("div"), this._v(" "), a("div"), this._v(" "), a("div"), this._v(" "), a("div")])
					}
				]
			};
		var u = s("VU/8")(p, m, !1, function(t) {
			s("aFBi")
		}, "data-v-26cbc557", null).exports,
			g = {
				name: "gamePage",
				data: function() {
					return {}
				},
				components: {},
				created: function() {
					var t = this,
						a = t.$route.query;
					a.dailiD ? t.$apiFun.get("/api/getAgentLoginUrl", {
						is_mobile_url: 0
					}).then(function(a) {
						200 != a.code && t.showTost(0, a.message), 200 == a.code && window.open(a.data.url, "_self")
					}) : a.name && t.goGamePage(a.name, a.type, a.code)
				},
				mounted: function() {},
				methods: {
					goGamePage: function(t, a, s) {
						var e = this;
						a = a || 0, e.$apiFun.post("/api/getGameUrl", {
							plat_name: t,
							game_type: a,
							game_code: s,
							is_mobile_url: 0
						}).then(function(t) {
							console.log(t), 200 != t.code && (e.showTost(0, t.message), setTimeout(function() {
								window.location.href = "about:blank", window.close()
							}, 2e3)), 200 == t.code && window.open(t.data.url, "_self")
						}).
						catch (function(t) {
							setTimeout(function() {
								window.location.href = "about:blank", window.close()
							}, 2e3)
						})
					},
					showTost: function(t, a) {
						var s = t ? "success" : "error";
						$("body").append('\n            <div role="alert" class="ants-message el-message el-message--' + s + '" style="top: 20px; z-index: 2009;"><i class="el-message__icon el-icon-' + s + '"></i>\n            <p class="el-message__content">' + a + "\n            </p></div>"), setTimeout('$(".ants-message").detach()', 3e3)
					}
				}
			}, h = {
				render: function() {
					this.$createElement;
					this._self._c;
					return this._m(0)
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							attrs: {
								id: "loading_screen"
							}
						}, [a("div", {
							staticClass: "lds-ring large"
						}, [a("div"), this._v(" "), a("div"), this._v(" "), a("div"), this._v(" "), a("div")])])
					}
				]
			};
		var f = s("VU/8")(g, h, !1, function(t) {
			s("0Kot")
		}, "data-v-6fb48bdc", null).exports,
			C = {
				name: "index",
				data: function() {
					return {
						type: null,
						hongbashow: !0,
						tanshow: !0,
						pid: ""
					}
				},
				created: function() {
					var t = this.$route.query;
					t.pid && (this.pid = t.pid)
				},
				methods: {
					changtanshow: function() {
						this.tanshow = !this.tanshow
					},
					changhongbashow: function() {
						this.hongbashow = !1
					}
				},
				mounted: function() {
					new Swiper("#index_banner", {
						loop: !0,
						navigation: {
							nextEl: "#index_banner .swiper-button-next",
							prevEl: "#index_banner .swiper-button-prev"
						},
						centeredSlides: !0,
						effect: "fade",
						slidesPerView: "auto",
						autoplay: {
							delay: 1e4
						},
						keyboard: !0
					});
					$(".floating_img1_close").click(function() {
						$(".floating_img1").hide()
					})
				},
				updated: function() {
					console.log(2)
				},
				beforeDestroy: function() {}
			}, b = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [t.tanshow && 1 == t.$store.state.appInfo.index_modal && !t.pid ? s("div", {
						staticClass: "modal fade large wna_style show",
						staticStyle: {
							display: "block"
						}
					}, [s("div", {
						staticClass: "modal-dialog",
						staticStyle: {
							position: "relative",
							"margin-top": "8%"
						},
						attrs: {
							role: "document"
						}
					}, [s("div", {
						staticClass: "modal-content announcement-modal-content"
					}, [s("div", {
						staticClass: "modal-body"
					}, [s("h1", {
						staticStyle: {
							"text-align": "center",
							"padding-top": "20px"
						}
					}, [t._v("\n            欢迎来到" + t._s(t.$store.state.appInfo.title) + "\n            "), s("img", {
						staticStyle: {
							cursor: "pointer",
							position: "absolute",
							top: "12px",
							right: "10px",
							"z-index": "999",
							width: "40px"
						},
						attrs: {
							src: "/static/image/hongbaocolse.png"
						},
						on: {
							click: t.changtanshow
						}
					})]), t._v(" "), s("div", {
						staticClass: "modal_wna_style_body",
						staticStyle: {
							"padding-top": "30px"
						},
						domProps: {
							innerHTML: t._s(t.$store.state.appInfo.webcontent)
						}
					})])])])]) : t._e(), t._v(" "), 1 == t.$store.state.appInfo.redpacket_switch && t.hongbashow ? s("div", {
						attrs: {
							id: "redPacket"
						}
					}, [s("i", {
						staticClass: "grab",
						on: {
							click: function(a) {
								return t.$parent.goNav("/userredpackets")
							}
						}
					}), t._v(" "), s("img", {
						attrs: {
							src: "/static/image/hongbaocolse.png"
						},
						on: {
							click: t.changhongbashow
						}
					})]) : t._e(), t._v(" "), s("div", {
						staticClass: "layout_1920 index_banner_area"
					}, [s("div", {
						staticClass: "swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal",
						attrs: {
							id: "index_banner"
						}
					}, [s("div", {
						staticClass: "swiper-wrapper",
						staticStyle: {
							"transition-duration": "0ms"
						}
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "swiper-slide banner",
						staticStyle: {
							width: "1364px",
							opacity: "1",
							transform: "translate3d(-1364px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "0"
						}
					}), t._v(" "), s("div", {
						staticClass: "swiper-slide banner7",
						staticStyle: {
							width: "1364px",
							opacity: "0",
							transform: "translate3d(-12276px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "8"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt07.png"
						}
					}), t._v(" "), s("p", [t._v("业内赛事最多 盘口赔率最高，更有视频直播，让您把握最佳投注时机！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/sports")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner5",
						staticStyle: {
							width: "1364px",
							opacity: "0",
							transform: "translate3d(-9548px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "6"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt05.png"
						}
					}), t._v(" "), s("p", [t._v("覆盖全球所有电竞赛事应有尽有，简洁高效的投注界面，助您轻松上手！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/eSports")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner3 swiper-slide-active",
						staticStyle: {
							width: "1364px",
							opacity: "1",
							transform: "translate3d(-6820px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "4"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt03.png"
						}
					}), t._v(" "), s("p", [t._v("美女荷官现场发牌 ，更有专属vip包桌及咪牌式体验，让您拥有身临其境的体验！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/realPerson")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner6",
						staticStyle: {
							width: "1364px",
							opacity: "0",
							transform: "translate3d(-10912px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "7"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt06.png"
						}
					}), t._v(" "), s("p", [t._v("专注于彩票游戏行业多年拥有经典彩种、只为致力于打造公平、公正的彩票游戏体验！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/lottery")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner2 swiper-slide-prev",
						staticStyle: {
							width: "1364px",
							opacity: "1",
							transform: "translate3d(-5456px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "3"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt02.png"
						}
					}), t._v(" "), s("p", [t._v("汇聚全球最热门的棋牌游戏，万人在线对战，火热PK！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/cards")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner1",
						staticStyle: {
							width: "1364px",
							opacity: "1",
							transform: "translate3d(-4092px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "2"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt01.png"
						}
					}), t._v(" "), s("p", [t._v("汇聚世界顶级电子老虎机，触手可及的千万累积奖池，等您一触即发！")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/electronics")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), s("div", {
						staticClass: "swiper-slide banner8",
						staticStyle: {
							width: "1364px",
							opacity: "1",
							transform: "translate3d(-2728px, 0px, 0px)",
							"transition-duration": "0ms"
						},
						attrs: {
							"data-swiper-slide-index": "1"
						}
					}, [s("div", {
						staticClass: "txtBox"
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/banner_txt08.png"
						}
					}), t._v(" "), s("p", [t._v("手机投注提供所有游戏，线上存取款，一键操作，娱乐信手拈来，财富一键在手。")]), t._v(" "), s("div", {
						staticClass: "btn"
					}, [s("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/app")
							}
						}
					}, [t._v("了解更多")])])])]), t._v(" "), t._m(1)]), t._v(" "), t._m(2), t._v(" "), s("span", {
						staticClass: "swiper-notification",
						attrs: {
							"aria-live": "assertive",
							"aria-atomic": "true"
						}
					})])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "swiper-slide banner7 swiper-slide-duplicate",
							staticStyle: {
								width: "1364px",
								opacity: "1",
								transform: "translate3d(0px, 0px, 0px)",
								"transition-duration": "0ms"
							},
							attrs: {
								"data-swiper-slide-index": "8"
							}
						}, [a("div", {
							staticClass: "txtBox"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/banner_txt07.png"
							}
						}), this._v(" "), a("p", [this._v("业内赛事最多 盘口赔率最高，更有视频直播，让您把握最佳投注时机！")]), this._v(" "), a("div", {
							staticClass: "btn"
						}, [a("a", {
							attrs: {
								href: "javascript:;"
							}
						}, [this._v("了解更多")])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "swiper-slide banner swiper-slide-duplicate",
							staticStyle: {
								width: "1364px",
								opacity: "0",
								transform: "translate3d(-13640px, 0px, 0px)",
								"transition-duration": "0ms"
							},
							attrs: {
								"data-swiper-slide-index": "0"
							}
						}, [a("div", {
							staticClass: "txtBox"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img01.png"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "swiper_button_area"
						}, [a("div", {
							staticClass: "swiper-button-next",
							attrs: {
								tabindex: "0",
								role: "button",
								"aria-label": "Next slide"
							}
						}), this._v(" "), a("div", {
							staticClass: "swiper-button-prev",
							attrs: {
								tabindex: "0",
								role: "button",
								"aria-label": "Previous slide"
							}
						})])
					}
				]
			};
		var w = s("VU/8")(C, b, !1, function(t) {
			s("zaCW")
		}, "data-v-75791b5d", null).exports,
			y = {
				render: function() {
					var t = this.$createElement;
					return (this._self._c || t)("div")
				},
				staticRenderFns: []
			};
		var k = s("VU/8")({
			name: "register",
			data: function() {
				return {}
			},
			created: function() {},
			methods: {},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, y, !1, function(t) {
			s("myVX")
		}, "data-v-6cf56998", null).exports,
			x = {
				name: "navIndex",
				data: function() {
					return {
						urlList: []
					}
				},
				created: function() {
					var t = s("IuJc");
					console.log(t.urlList), this.urlList = t.urlList
				},
				methods: {},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, I = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticStyle: {
							height: "100vh"
						},
						attrs: {
							id: "container"
						}
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "btmBox"
					}, [s("div", {
						staticClass: "wrap"
					}, [s("div", {
						staticClass: "logo",
						on: {
							click: function(a) {
								return t.$parent.goNav("/homes")
							}
						}
					}, [s("a", {
						staticStyle: {
							display: "flex",
							"align-items": "center",
							"justify-content": "center"
						}
					}, [s("img", {
						staticStyle: {
							width: "90%"
						},
						attrs: {
							src: t.$store.state.appInfo.site_logo,
							onerror: "this.src = '/static/image/logo_horizontal.png'",
							alt: ""
						}
					})])]), t._v(" "), s("ul", {
						staticClass: "navi clearfix"
					}, [s("li", [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/homes")
							}
						}
					}, [s("img", {
						attrs: {
							src: "/static/image/navi_img01.png",
							alt: ""
						}
					}), t._v(" "), t._m(1)]), t._v(" "), s("div", {
						staticClass: "jsBox"
					}, [s("img", {
						staticClass: "arrow",
						attrs: {
							src: "/static/image/arrow.png",
							alt: ""
						}
					}), t._v(" "), s("ul", {
						staticClass: "ulList"
					}, t._l(t.urlList, function(a, e) {
						return s("li", {
							key: e
						}, [s("span", {
							staticClass: "ms",
							attrs: {
								id: "lineMs" + e
							}
						}, [s("span", [t._v(t._s(30 + Math.round(30 * Math.random() + 20)))]), t._v("ms")]), s("img", {
							attrs: {
								src: "/static/image/icon.png",
								alt: ""
							}
						}), s("span", {
							staticClass: "url"
						}, [t._v(t._s(a))]), s("a", {
							attrs: {
								href: a,
								target: "_blank"
							}
						}, [t._v("立即进入")])])
					}), 0)])]), t._v(" "), s("li", [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/app")
							}
						}
					}, [s("img", {
						attrs: {
							src: "/static/image/navi_img02.png",
							alt: ""
						}
					}), t._m(2)])]), t._v(" "), t._m(3), t._v(" "), s("li", [s("a", {
						on: {
							click: t.$parent.openKefu
						}
					}, [s("img", {
						attrs: {
							src: "/static/image/navi_img04.png",
							alt: ""
						}
					}), t._m(4)])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "imgTxt"
						}, [a("div", [a("a", {
							staticStyle: {
								"margin-top": "-138px",
								position: "absolute",
								left: "88px",
								top: "50%",
								overflow: "hidden",
								height: "213px"
							}
						}, [a("img", {
							staticStyle: {
								position: "relative",
								margin: "0",
								top: "0",
								left: "0"
							},
							attrs: {
								mode: "aspectFill",
								src: "/static/image/img.png",
								alt: ""
							}
						})])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("span", {
							staticClass: "txt"
						}, [a("span", [this._v("进入官网")]), this._v("ENTER INDEX")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("span", {
							staticClass: "txt"
						}, [a("span", [this._v("APP下载")]), this._v("APP DOWNLOAD")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("li", [a("a", {
							attrs: {
								href: "https://www.ub66.net",
								target: "_blank"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/navi_img03.png",
								alt: ""
							}
						}), a("span", {
							staticClass: "txt"
						}, [a("span", [this._v("寰宇浏览器")]), this._v("UNIVERSE BROWSER")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("span", {
							staticClass: "txt"
						}, [a("span", [this._v("在线客服")]), this._v("ONLINE SERVICE")])
					}
				]
			};
		var L = s("VU/8")(x, I, !1, function(t) {
			s("H5O8")
		}, "data-v-6db9c44f", null).exports,
			S = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "more_game_area sports layout_1920"
					}, [s("div", {
						staticClass: "more_game_content"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "content_block"
					}), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "more_game_text"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "text"
					}, [t._v("玩法多样，优质体验，体育赛事全覆盖，一场比赛百种玩法，操作简单，满足新老用户体验 特殊赛事·感受激情 特殊盘口、15分钟让球，大小、独赢等独特玩法，让您时刻享受激情。")]), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "more_game_items"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("a", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("div", {
							staticClass: "more_game_item"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/sport/" + a.platform_name + ".png"
							}
						})]), t._v(" "), s("div", [s("div", [t._v(t._s(a.name))])])])]) : t._e()
					}), 0), t._v(" "), t._e()])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("img", {
							attrs: {
								src: "/static/image/title_sport.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "more_game_category"
						}, [s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_1.png"
							}
						}), t._v(" "), s("div", [t._v("足球")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_2.png"
							}
						}), t._v(" "), s("div", [t._v("篮球")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_3.png"
							}
						}), t._v(" "), s("div", [t._v("网球")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_4.png"
							}
						}), t._v(" "), s("div", [t._v("斯诺克")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_5.png"
							}
						}), t._v(" "), s("div", [t._v("棒球")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_6.png"
							}
						}), t._v(" "), s("div", [t._v("排球")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/sport_icon_7.png"
							}
						}), t._v(" "), s("div", [t._v("赛车")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344722222.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("沙巴体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640921166.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("三昇体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/cmdty.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("CMD体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/xbty.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("ASIA体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/tg_hover.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("TG体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("a", {
							attrs: {
								href: "#",
								onclick: "javascript: processGame(52)"
							}
						}, [a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/sbo_hover.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("SBO 体育")])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640062419.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OB体育")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344860.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BBIN体育")])])])
					}
				]
			};
		var T = s("VU/8")({
			name: "sports",
			data: function() {
				return {
					gameList: []
				}
			},
			created: function() {
				this.getGameList()
			},
			methods: {
				getGameList: function() {
					var t = this;
					t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
						category: "sport"
					}).then(function(a) {
						200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
					})
				}
			},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, S, !1, function(t) {
			s("n7Ug")
		}, "data-v-03b43ad0", null).exports,
			E = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "more_game_area esports layout_1920"
					}, [s("div", {
						staticClass: "more_game_content"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "content_block"
					}), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "more_game_text"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "text"
					}, [t._v("全球顶尖赛事全覆盖，提供专业的赔率数据，结算赛果数据。日均提供100+电竞赛事，50+电竞新玩法，10+电竞滚球盘，业内最佳盘口。令人惊叹的视觉界面及高效的用户体验，让您轻松上手。")]), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "more_game_items"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("a", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("div", {
							staticClass: "more_game_item"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/gaming/" + a.platform_name + ".png"
							}
						})]), t._v(" "), s("div", [s("div", [t._v(t._s(a.name))])])])]) : t._e()
					}), 0), t._v(" "), t._e()])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("img", {
							attrs: {
								src: "/static/image/title_esport.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "more_game_category"
						}, [s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_1.png"
							}
						}), t._v(" "), s("div", [t._v("英雄联盟")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_2.png"
							}
						}), t._v(" "), s("div", [t._v("王者荣耀")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_3.png"
							}
						}), t._v(" "), s("div", [t._v("DOTA2")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_4.png"
							}
						}), t._v(" "), s("div", [t._v("CS:GO")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_5.png"
							}
						}), t._v(" "), s("div", [t._v("炉石传说")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_6.png"
							}
						}), t._v(" "), s("div", [t._v("守望先锋")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/esport_icon_7.png"
							}
						}), t._v(" "), s("div", [t._v("国际足联")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/lddj.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("雷火电竞")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/aviadj.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("泛亚电竞")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640062419.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OB电竞")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1609233533.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("小艾电竞")])])])
					}
				]
			};
		var P = s("VU/8")({
			name: "eSports",
			data: function() {
				return {
					gameList: []
				}
			},
			created: function() {
				this.getGameList()
			},
			methods: {
				getGameList: function() {
					var t = this;
					t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
						category: "gaming"
					}).then(function(a) {
						200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
					})
				}
			},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, E, !1, function(t) {
			s("iybx")
		}, "data-v-d5ae6582", null).exports,
			z = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "more_game_area layout_1920"
					}, [s("div", {
						staticClass: "more_game_content"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "content_block"
					}), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "more_game_text"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "text"
					}, [t._v("业内最具创意与游戏性的娱乐平台，专业的技术支持，顶级的稳定设备，数百位受过专业培训的荷官和仿真的赌场环境，更可让玩家尽享乐趣，感受身临其境的氛围！")]), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "more_game_items"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("a", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("div", {
							staticClass: "more_game_item"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/realbet/" + a.platform_name + ".png"
							}
						})]), t._v(" "), s("div", [s("div", [t._v(t._s(a.name))])])])]) : t._e()
					}), 0), t._v(" "), t._e()])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("img", {
							attrs: {
								src: "/static/image/title_live.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "more_game_category"
						}, [s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_1.png"
							}
						}), t._v(" "), s("div", [t._v("百家乐")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_2.png"
							}
						}), t._v(" "), s("div", [t._v("轮盘")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_3.png"
							}
						}), t._v(" "), s("div", [t._v("骰宝")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_4.png"
							}
						}), t._v(" "), s("div", [t._v("龙虎")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_5.png"
							}
						}), t._v(" "), s("div", [t._v("牛牛")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_6.png"
							}
						}), t._v(" "), s("div", [t._v("炸金花")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/live_icon_7.png"
							}
						}), t._v(" "), s("div", [t._v("三公")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610100513.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("AG真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344870.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BG真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610100519.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BBIN真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/wmzr.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("完美真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/ogzr.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OG真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1628649612333.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("DG真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344893.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("欧博 真人")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640062419.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OB真人")])])])
					}
				]
			};
		var N = s("VU/8")({
			name: "realPerson",
			data: function() {
				return {
					gameList: []
				}
			},
			created: function() {
				this.getGameList()
			},
			methods: {
				getGameList: function() {
					var t = this;
					t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
						category: "realbet"
					}).then(function(a) {
						200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
					})
				}
			},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, z, !1, function(t) {
			s("fvJY")
		}, "data-v-22eef2c6", null).exports,
			A = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "more_game_area lottery layout_1920"
					}, [s("div", {
						staticClass: "more_game_content"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "content_block"
					}), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "more_game_text"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "text"
					}, [t._v("提供全面多元的棋牌玩法，抢庄牛牛、百家乐、炸金花、斗地主、二人麻将、龙虎斗等数十款热门棋牌游戏任君选，与好友、其他玩家真实对战，让您轻松畅玩棋牌！")]), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "more_game_items"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("a", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("div", {
							staticClass: "more_game_item"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/lottery/" + a.platform_name + ".png"
							}
						})]), t._v(" "), s("div", [s("div", [t._v(t._s(a.name))])])])]) : t._e()
					}), 0), t._v(" "), t._e()])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("img", {
							attrs: {
								src: "/static/image/title_lottery.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "more_game_category"
						}, [s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_1.png"
							}
						}), t._v(" "), s("div", [t._v("时时彩")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_2.png"
							}
						}), t._v(" "), s("div", [t._v("六合彩")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_3.png"
							}
						}), t._v(" "), s("div", [t._v("11选5")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_4.png"
							}
						}), t._v(" "), s("div", [t._v("北京赛车")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_5.png"
							}
						}), t._v(" "), s("div", [t._v("幸运农场")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/lottery_icon_6.png"
							}
						}), t._v(" "), s("div", [t._v("极速赛车")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/tg_hover.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("TG彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vrcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("VR彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/igcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("IG官方彩")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/igcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("IG香港彩")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/igcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("IG时时彩")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/dlcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("大立彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344860.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BBIN彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/tcgcp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("天成彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/17-hover.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("双赢彩票")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640062419.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OB彩票")])])])
					}
				]
			};
		var F = s("VU/8")({
			name: "lottery",
			data: function() {
				return {
					gameList: []
				}
			},
			created: function() {
				this.getGameList()
			},
			methods: {
				getGameList: function() {
					var t = this;
					t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
						category: "lottery"
					}).then(function(a) {
						200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
					})
				}
			},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, A, !1, function(t) {
			s("UPfc")
		}, "data-v-6d5c013c", null).exports,
			U = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "more_game_area poker layout_1920"
					}, [s("div", {
						staticClass: "more_game_content"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "content_block"
					}), t._v(" "), s("div", {
						staticClass: "content_block"
					}, [s("div", {
						staticClass: "more_game_text"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "text"
					}, [t._v("提供全面多元的棋牌玩法，抢庄牛牛、百家乐、炸金花、斗地主、二人麻将、龙虎斗等数十款热门棋牌游戏任君选，与好友、其他玩家真实对战，让您轻松畅玩棋牌！")]), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "more_game_items"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("a", {
							key: e,
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("div", {
							staticClass: "more_game_item"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/joker/" + a.platform_name + ".png"
							}
						})]), t._v(" "), s("div", [s("div", [t._v(t._s(a.name))])])])]) : t._e()
					}), 0), t._v(" "), t._e()])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "title"
						}, [a("img", {
							attrs: {
								src: "/static/image/title_poker.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "more_game_category"
						}, [s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_1.png"
							}
						}), t._v(" "), s("div", [t._v("百家乐")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_2.png"
							}
						}), t._v(" "), s("div", [t._v("龙虎斗")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_3.png"
							}
						}), t._v(" "), s("div", [t._v("抢庄牛牛")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_4.png"
							}
						}), t._v(" "), s("div", [t._v("炸金花")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_5.png"
							}
						}), t._v(" "), s("div", [t._v("斗地主")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_6.png"
							}
						}), t._v(" "), s("div", [t._v("二十一点")])]), t._v(" "), s("div", [s("img", {
							attrs: {
								src: "/static/image/poker_icon_7.png"
							}
						}), t._v(" "), s("div", [t._v("万人骰宝")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610100519.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BBIN棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610344870.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("BG棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/dtqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("大唐棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1634021053333.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("FG棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/hlqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("欢乐棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/kxqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("凯旋棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/kx2qp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("凯旋2棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA160923342778.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("开元棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1640062419.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("OB棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/syqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("双赢棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/vendorGameLogoA1610091442333.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("VG棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/xsjqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("新世界棋牌")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "more_game_item"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/legqp.png"
							}
						})]), this._v(" "), a("div", [a("div", [this._v("乐游棋牌")])])])
					}
				]
			};
		var B = s("VU/8")({
			name: "cards",
			data: function() {
				return {
					gameList: []
				}
			},
			created: function() {
				this.getGameList()
			},
			methods: {
				getGameList: function() {
					var t = this;
					t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
						category: "joker"
					}).then(function(a) {
						200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
					})
				}
			},
			mounted: function() {},
			updated: function() {},
			beforeDestroy: function() {}
		}, U, !1, function(t) {
			s("K8E7")
		}, "data-v-5657bdae", null).exports,
			q = {
				name: "electronics",
				data: function() {
					return {
						obgdyList: [],
						fgdzList: [],
						ppList: [],
						xxgameList: [],
						gamecode: "pp",
						gameList: [],
						bigShow: !0
					}
				},
				created: function() {
					this.getGameList(), this.$route.query && (this.gamecode = this.$route.query.type || this.gamecode), console.log(this.gamecode), this.gamelistBycode()
				},
				methods: {
					getGameList: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.get("/api/game/list", {
							category: "concise"
						}).then(function(a) {
							200 == a.code && (t.gameList = a.data), t.$parent.hideLoading()
						})
					},
					changgamecode: function(t) {
						t != this.gamecode && (this.gamecode = t, this.gamelistBycode())
					},
					gamelistBycode: function() {
					var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/gamelistBycode", {
							gamecode: t.gamecode,
							gjc: t.gjc
						}).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.xxgameList = a.data), setTimeout(function() {
								t.$parent.hideLoading()
							}, 2e3)
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, D = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "layout_1920_innerpadding marquee_area",
						attrs: {
							"data-toggle": "modal",
							onclick: "openMarqueePopUp('marqueeannouncement');"
						}
					}, [t._m(0), t._v(" "), s("marquee", {
						staticClass: "marquee_item",
						attrs: {
							scrollamount: "5",
							onmouseover: "this.stop();",
							onmouseout: "this.start();"
						}
					}, [s("div", [t._v("\n        尊敬的新老客户您好，因近期第三方充值不稳定，请您使用【公司入款转账】充值自动派送优惠，全网最火热充值进行中！充值业界首家全自动手机银行转账，填写正确存款信息，优惠赠送可选方案，次次笔笔可送0.7%，同时广泛CGpay数字货币支付，请在CGpay商户使用支付宝、微信、银行卡购买CG币后进行支付，迷人优惠1%立马加俸，超高入款优惠，秒到账啦~祝您游戏愉快！\n      ")]), t._v(" "), s("div", [t._v("\n        温馨提示：近期频繁出现我司域名网址被恶意手段拦截，转跳到非法网站页面显示谎称“平台合并”“系统升级改版”“网站停用”“网址变更等”骗取钱财，请广大会员提高警惕，切勿相信！为了保障您账号安全，切勿在非" + t._s(t.$store.state.appInfo.title) + "网址输入您个人信息，以免造成不必要的损失，强烈建议每一位会员下载【" + t._s(t.$store.state.appInfo.title) + "专属APP】进行娱乐，" + t._s(t.$store.state.appInfo.title) + "官方网址：9500.com ，如遇到任何问题请第一时间联系我们24小时在线客服咨处理！\n      ")]), t._v(" "), s("div", [t._v("第十期现金大回馈彩金已派送完毕，请登录会员账号 → 通过【我的】→【钱包记录】→【优惠明细】 即可查询 ！☀️强烈推荐您下载使用【" + t._s(t.$store.state.appInfo.title) + "app】或【寰宇浏览器】，登录在线领取超多优惠~~")]), t._v(" "), s("div", [t._v("目前入款【李江山-河南农信银行】已停用,请充值的会员每次充值前务必进入平台充值页面获取实时信息进行充值，请勿保存旧的收款信息进行充值，以免将款项存入已过期账户无法查收，如有造成资金损失我司概不负责，请您留意，谢谢 !")])])], 1), t._v(" "), s("div", {
						staticClass: "innerpage game_innerpage"
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "layout_1200 gotop_area slot_layout"
					}, [s("div", {
						staticClass: "slot_tab"
					}, t._l(t.gameList, function(a, e) {
						return 1 == a.app_state ? s("div", {
							key: e,
							staticClass: "content_block",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.platform_name, a.game_code, "")
								}
							}
						}, [s("span", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/concise/" + a.platform_name + ".png"
							}
						}), t._v(" "), s("img", {
							attrs: {
								alt: "",
								src: "/static/image/concise/" + a.platform_name + ".png"
							}
						})]), t._v(t._s(a.name) + "\n        ")]) : t._e()
					}), 0), t._v(" "), s("div", {
						staticClass: "slot_list_area"
					}, [s("div", {
						staticClass: "filter_tag_container"
					}, [s("div", {
						staticClass: "slot_tag",
						attrs: {
							id: "gameType"
						}
					}, [s("div", {
						class: "pp" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "0"
						},
						on: {
							click: function(a) {
								return t.changgamecode("pp")
							}
						}
					}, [t._v("PP电子")]), t._v(" "), s("div", {
						class: "mg" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "1"
						},
						on: {
							click: function(a) {
								return t.changgamecode("mg")
							}
						}
					}, [t._v("MG电子")]), t._v(" "),s("div", {
						class: "ag" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "2"
						},
						on: {
							click: function(a) {
								return t.changgamecode("ag")
							}
						}
					}, [t._v("AG电子")]), t._v(" "),s("div", {
						class: "bbin" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "3"
						},
						on: {
							click: function(a) {
								return t.changgamecode("bbin")
							}
						}
					}, [t._v("BBIN电子")]), t._v(" "), s("div", {
						class: "cq9" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "4"
						},
						on: {
							click: function(a) {
								return t.changgamecode("cq9")
							}
						}
					}, [t._v("CQ9电子")]), t._v(" "), s("div", {
						class: "jdb" == t.gamecode ? " tag active" : "tag",
						attrs: {
							"data-tab": "5"
						},
						on: {
							click: function(a) {
								return t.changgamecode("jdb")
							}
						}
					}, [t._v("JDB电子")])])]), t._v(" "), "pp" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(2, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e(), t._v(" "),  "mg" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(2, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e(), t._v(" "),  "ag" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(2, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e(), t._v(" "), "bbin" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(3, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e(), t._v(" "), "cq9" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(4, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e(), t._v(" "), "jdb" == t.gamecode ? s("ul", {
						staticClass: "slot_list mini",
						attrs: {
							id: "gameList"
						}
					}, t._l(t.xxgameList, function(a, e) {
						return s("li", {
							key: e
						}, [s("div", [s("div", {
							staticClass: "slot_game_item"
						}, [s("div", {
							staticClass: "thumb"
						}, [s("img", {
							staticClass: "slot_img",
							attrs: {
								src: a.gamepic,
								loading: "lazy"
							},
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						})]), t._v(" "), s("span", {
							staticClass: "slot join_now_btn",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v("立即游戏")]), t._v(" "), s("div", {
							staticClass: "text"
						}, [t._m(5, !0), t._v(" "), s("div", {
							staticClass: "title",
							on: {
								click: function(s) {
									return t.$parent.openGamePage(a.catecode, a.gamecode, "")
								}
							}
						}, [t._v(t._s(a.gamename))])])])])])
					}), 0) : t._e()])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("span", [a("span", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/marquee_title.png"
							}
						}), this._v("快讯:")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "layout_1920 index_banner_area"
						}, [a("div", {
							staticClass: "swiper-container",
							attrs: {
								id: "slot_banner"
							}
						}, [a("div", {
							staticClass: "swiper-wrapper"
						}, [a("div", {
							staticClass: "swiper-slide"
						}, [a("img", {
							staticClass: "fallback large",
							attrs: {
								alt: "",
								src: "/static/image/slot_banner.png"
							}
						})])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "hotgame"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/hot.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "hotgame"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/hot.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "hotgame"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/hot.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "hotgame"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/hot.png"
							}
						})])
					}
				]
			};
		var j = s("VU/8")(q, D, !1, function(t) {
			s("OK4y")
		}, "data-v-ae16088c", null).exports,
			R = {
				name: "about",
				data: function() {
					return {
						type: "about_us",
						dataBox1: {},
						dataBox2: {},
						dataBox3: {},
						dataBox4: {},
						dataBox5: {},
						dataBox7: {},
						dataBox8: {}
					}
				},
				created: function() {
					var t = this;
					this.$route.query && (t.type = this.$route.query.type || t.type);
					[1, 2, 3, 4, 5, 7, 8].forEach(function(a) {
						t.getAllCont(a)
					})
				},
				methods: {
					getAllCont: function(t) {
						var a = this;
						a.$parent.showLoading(), a.$apiFun.post("/api/article", {
							type: t
						}).then(function(s) {
							a["dataBox" + t] = s.data, a.$parent.hideLoading()
						}).
						catch (function(t) {
							a.$parent.hideLoading()
						})
					}
				},
				mounted: function() {
					$(".aboutus_right").css({
						opacity: "0"
					}), $(".right_content_body .block_content > .answer").stop().slideDown(30), $(".details_content").addClass("active"), $(".mdetails_content").addClass("active"), setTimeout(function() {
						$(".right_content_body .block_content > .answer").stop().slideUp(30), $(".details_content").removeClass("active"), $(".mdetails_content").removeClass("active"), $("#pay_offline").addClass("active"), $("#mpay_offline").addClass("active")
					}, 0), setTimeout(function() {
						$(".aboutus_right").css({
							opacity: "1"
						})
					}, 100);
					var t = new Swiper("#pay_offline_slider_thumb", {
						slidesPerView: 4.5,
						spaceBetween: 10,
						observer: !0,
						observeParents: !0,
						centeredSlides: !0
					}),
						a = (new Swiper("#pay_offline_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_offline_slider .swiper-button-next",
								prevEl: "#pay_offline_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: t
							}
						}), new Swiper("#pay_online_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						s = (new Swiper("#pay_online_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_online_slider .swiper-button-next",
								prevEl: "#pay_online_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: a
							}
						}), new Swiper("#pay_unionpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						e = (new Swiper("#pay_unionpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_unionpay_slider .swiper-button-next",
								prevEl: "#pay_unionpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: s
							}
						}), new Swiper("#pay_unionpayqr_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						i = (new Swiper("#pay_unionpayqr_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_unionpayqr_slider .swiper-button-next",
								prevEl: "#pay_unionpayqr_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: e
							}
						}), new Swiper("#pay_alipay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						n = (new Swiper("#pay_alipay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_alipay_slider .swiper-button-next",
								prevEl: "#pay_alipay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: i
							}
						}), new Swiper("#pay_wechatpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						o = (new Swiper("#pay_wechatpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_wechatpay_slider .swiper-button-next",
								prevEl: "#pay_wechatpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: n
							}
						}), new Swiper("#pay_jdpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						r = (new Swiper("#pay_jdpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#pay_jdpay_slider .swiper-button-next",
								prevEl: "#pay_jdpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: o
							}
						}), new Swiper("#withdrawal_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						c = (new Swiper("#withdrawal_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#withdrawal_slider .swiper-button-next",
								prevEl: "#withdrawal_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: r
							}
						}), new Swiper("#transfer_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0
						}), new Swiper("#deposit_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0
						}), new Swiper("#mpay_offline_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						l = (new Swiper("#mpay_offline_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_offline_slider .swiper-button-next",
								prevEl: "#mpay_offline_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: c
							}
						}), new Swiper("#mpay_online_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						_ = (new Swiper("#mpay_online_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_online_slider .swiper-button-next",
								prevEl: "#mpay_online_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: l
							}
						}), new Swiper("#mpay_unionpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						d = (new Swiper("#mpay_unionpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_unionpay_slider .swiper-button-next",
								prevEl: "#mpay_unionpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: _
							}
						}), new Swiper("#mpay_unionpayqr_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						v = (new Swiper("#mpay_unionpayqr_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_unionpayqr_slider .swiper-button-next",
								prevEl: "#mpay_unionpayqr_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: d
							}
						}), new Swiper("#mpay_alipay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						p = (new Swiper("#mpay_alipay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_alipay_slider .swiper-button-next",
								prevEl: "#mpay_alipay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: v
							}
						}), new Swiper("#mpay_wechatpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						m = (new Swiper("#mpay_wechatpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_wechatpay_slider .swiper-button-next",
								prevEl: "#mpay_wechatpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: p
							}
						}), new Swiper("#mpay_jdpay_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						u = (new Swiper("#mpay_jdpay_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mpay_jdpay_slider .swiper-button-next",
								prevEl: "#mpay_jdpay_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: m
							}
						}), new Swiper("#mwithdrawal_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						})),
						g = (new Swiper("#mwithdrawal_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0,
							navigation: {
								nextEl: "#mwithdrawal_slider .swiper-button-next",
								prevEl: "#mwithdrawal_slider .swiper-button-prev"
							},
							thumbs: {
								swiper: u
							}
						}), new Swiper("#mtransfer_slider", {
							loop: !1,
							centeredSlides: !0,
							slidesPerView: 1,
							observer: !0,
							observeParents: !0
						}), new Swiper("#mdeposit_slider_thumb", {
							slidesPerView: 4.5,
							spaceBetween: 10,
							observer: !0,
							observeParents: !0,
							centeredSlides: !0
						}));
					new Swiper("#mdeposit_slider", {
						loop: !1,
						centeredSlides: !0,
						slidesPerView: 1,
						observer: !0,
						observeParents: !0,
						navigation: {
							nextEl: "#mdeposit_slider .swiper-button-next",
							prevEl: "#mdeposit_slider .swiper-button-prev"
						},
						thumbs: {
							swiper: g
						}
					});
					$(function() {
						function t() {
							var t = !1;
							$(".fbinput").each(function() {
								"" == $(this).val() && (t = !0)
							}), "" == $("#category_input").val() && (t = !0), t ? $("#feedback_submit_btn").prop("disabled", !0) : $("#feedback_submit_btn").prop("disabled", !1)
						}
						$(document).on("click", "#footer_guide_link", function(t) {
							t.preventDefault(), $(".aboutus_left .aboutus_left_content[data-content='guide']").trigger("click"), $(window).scrollTop(0)
						}), $(document).on("click", "#footer_feedback_link", function(t) {
							t.preventDefault(), $(".aboutus_left .aboutus_left_content[data-content='feedback']").trigger("click"), $(window).scrollTop(0)
						}), $(document).on("click", "#footer_contact_link", function(t) {
							t.preventDefault(), $(".aboutus_left .aboutus_left_content[data-content='contact_us']").trigger("click"), $(window).scrollTop(0)
						}), $(document).on("click", "#footer_about_link", function(t) {
							t.preventDefault(), $(".aboutus_left .aboutus_left_content[data-content='about_us']").trigger("click"), $(window).scrollTop(0)
						}), $(".right_content_body .block_content > .question").off("click").click(function() {
							var t = $(this).parent().index() + 1;
							$(".right_content_body .block_content:not(:nth-child(" + t + "))").removeClass("active"), $(".right_content_body .block_content > .answer").stop().slideUp(300), $(this).parent().toggleClass("active"), $(this).parent().children(".answer").stop().slideToggle(300), $(this).children("#pay_offline").addClass("active"), $(this).children("#mpay_offline").addClass("active")
						}), $(document).on("click", ".aboutus_left_content", function() {
							var t = $(this).data("content");
							$(".aboutus_left_content").removeClass("active").removeClass("extra"), $(".abountus_guide_content").removeClass("active"), $(".abountus_business_content").removeClass("active"), $(this).addClass("active"), $(".right_content").removeClass("active"), $("." + t).addClass("active"), "guide" == t ? ($(this).addClass("extra"), $(".abountus_guide_content").addClass("active")) : "business" == t && ($(this).addClass("extra"), $(".abountus_business_content").addClass("active"))
						}), $(document).on("click", ".guide_a", function() {
							var t = $(this).data("content");
							$(".guide_a").removeClass("active"), $(this).addClass("active"), $(".guide_content").removeClass("active"), $("#" + t).addClass("active")
						}), $(document).on("click", ".business_a", function() {
							var t = $(this).data("content");
							$(".business_a").removeClass("active"), $(this).addClass("active"), $(".business_content").removeClass("active"), $("#" + t).addClass("active")
						}), $(document).on("click", ".top_right_title", function() {
							var t = $(this).data("content");
							$(".top_right_title").removeClass("active"), $(this).addClass("active"), $(".deposit_body").removeClass("active"), $("#" + t).addClass("active")
						}), $(document).on("click", ".pg_type", function() {
							var t = $(this).data("content");
							$(".pg_type").removeClass("active"), $(this).addClass("active"), $(".details_content").removeClass("active"), $("#" + t).addClass("active")
						}), $(document).on("click", ".mpg_type", function() {
							var t = $(this).data("content");
							$(".mpg_type").removeClass("active"), $(this).addClass("active"), $(".mdetails_content").removeClass("active"), $("#" + t).addClass("active")
						}), $(".fbinput").on("keyup change", t), $("#feedback_submit_btn").on("click", function() {
							$(".validation").remove();
							var t = new FormData,
								a = $("#feedback_form").serializeArray();
							$.each(a, function(a, s) {
								t.append(s.name, s.value)
							}), t.append("rf_cs_rForm_", "129a5a81935450c00280e9ed793bd6cdZoQ6HDeX6NZfMMhye2vTs01yu6HN6aOHyXsovJAYQs6EQa++vcSCLGaWOb3mtJ6nEZKkm2ysi6/6ETO8I1k+zg=="), ajaxFunction("/feedback/postData", function(t) {
								1 == t.success ? (alertMessage(t.message, "", "success"), setTimeout(function() {
									window.location.reload()
								}, 1e3)) : "string" === $.type(t.message) ? alertMessage(t.message, "", "error") : $.each(t.message, function(t, a) {
									$("#feedback_form ." + t + "_error").after("<div class='validation' style='color:red;text-align: left;'>" + a + "</div>")
								})
							}, t)
						});
						var a = window.location.hash;
						a && ((a = a.substr(1, a.length)).includes("business") ? ($(".aboutus_left_content[data-content='business']").trigger("click"), $(".aboutus_right").css({
							opacity: "1"
						}), setTimeout(function() {
							window.scrollTo(0, 0)
						}, 10), content_id = a, $(".business_a").removeClass("active"), $(content_id).addClass("active"), $(".business_content").removeClass("active"), $("#" + content_id).addClass("active")) : ($(".aboutus_left_content[data-content='" + a + "']").trigger("click"), setTimeout(function() {
							window.scrollTo(0, 0)
						}, 10))), $("ul#category").on("click", ".init", function() {
							$(this).closest("ul").children("li:not(.init)").toggle(), $("#category_input").val("")
						});
						var s, e = $("ul").children("li:not(.init)");
						$("ul#category").on("click", "li:not(.init)", function() {
							e.removeClass("selected"), $(this).addClass("selected"), $("ul#category").children(".init").html($(this).html()), e.toggle(), s = $(this).data("value"), $("#category_input").val(s), t()
						})
					})
				},
				updated: function() {},
				beforeDestroy: function() {},
				watch: {
					$route: {
						immediate: !0,
						handler: function() {
							var t = this.$route.query;
							t.type && (this.type = t.type)
						}
					}
				}
			}, V = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("link", {
						attrs: {
							rel: "stylesheet",
							type: "text/css",
							href: "css/aboutus.css"
						}
					}), t._v(" "), s("div", {
						staticClass: "aboutus_bg"
					}, [s("div", {
						staticClass: "layout_1200 aboutus_container"
					}, [s("div", {
						staticClass: "aboutus_left"
					}, [s("a", {
						class: "about_us" == t.type ? "aboutus_left_content about_left_icons active" : "aboutus_left_content about_left_icons",
						attrs: {
							"data-content": "about_us"
						}
					}, [t._m(0), t._v(" "), s("div", [t._v("关于我们")])]), t._v(" "), s("a", {
						class: "guide" == t.type ? "aboutus_left_content about_left_icons active" : "aboutus_left_content about_left_icons",
						attrs: {
							"data-content": "guide"
						}
					}, [t._m(1), t._v(" "), s("div", [t._v("新手指南")])]), t._v(" "), t._m(2), t._v(" "), s("a", {
						class: "faq" == t.type ? "aboutus_left_content about_left_icons active" : "aboutus_left_content about_left_icons",
						attrs: {
							"data-content": "faq"
						}
					}, [t._m(3), t._v(" "), s("div", [t._v("常见问题")])]), t._v(" "), s("a", {
						class: "business" == t.type ? "aboutus_left_content about_left_icons active" : "aboutus_left_content about_left_icons",
						attrs: {
							"data-content": "business"
						}
					}, [t._m(4), t._v(" "), s("div", [t._v("企业事务")])]), t._v(" "), t._m(5), t._v(" "), s("a", {
						class: "contact_us" == t.type ? "aboutus_left_content about_left_icons active" : "aboutus_left_content about_left_icons",
						attrs: {
							"data-content": "contact_us"
						}
					}, [t._m(6), t._v(" "), s("div", [t._v("联系我们")])])]), t._v(" "), s("div", {
						staticClass: "aboutus_right"
					}, [s("div", {
						class: "about_us" == t.type ? "right_content active about_us" : "right_content  about_us"
					}, [s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox7.content)
						}
					})]), t._v(" "), s("div", {
						class: "guide" == t.type ? "right_content active guide" : "right_content  guide"
					}, [t._m(7), t._v(" "), s("div", {
						staticClass: "guide_content",
						attrs: {
							id: "guide_deposit"
						}
					}, [t._m(8), t._v(" "), s("div", {
						staticClass: "right_content_body"
					}, [s("div", {
						staticClass: "deposit_body active",
						attrs: {
							id: "guide_offline_deposit"
						}
					}, [s("div", {
						staticClass: "block_content"
					}, [t._m(9), t._v(" "), s("div", {
						staticClass: "answer"
					}, [s("div", {
						staticClass: "answer_content"
					}, [s("p", [t._v("存款前，请确保您已经成功注册成为 “澳门" + t._s(t.$store.state.appInfo.title) + "” 的会员。进行存款前，请先登录您的会员账号。 于网页版申请存款，您可于网页左侧的快捷选单中找到 “钱包”，选择 “存款”，或将游标悬停在上方“账号” 处，可打开操作选单，选择 “存款”。")])])])]), t._v(" "), s("div", {
						staticClass: "block_content"
					}, [t._m(10), t._v(" "), s("div", {
						staticClass: "answer"
					}, [s("div", {
						staticClass: "answer_content"
					}, [s("p", [t._v("存款前，请确保您已经成功注册成为 “澳门" + t._s(t.$store.state.appInfo.title) + "” 的会员。进行存款前，请先登录您的会员账号。 于 APP/手机网页版申请存款，您可于下方的主选单中点选 “钱包”，进入钱包后，可在上方选择 “存款”。")])]), t._v(" "), t._m(11)])])])])]), t._v(" "), t._m(12), t._v(" "), t._m(13), t._v(" "), t._m(14)]), t._v(" "), s("div", {
						class: "faq" == t.type ? "right_content active faq" : "right_content  faq"
					}, [s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox1.content)
						}
					})]), t._v(" "), s("div", {
						class: "feedback" == t.type ? "right_content active feedback" : "right_content  feedback"
					}, [s("div", {
						staticClass: "right_content_header"
					}, [t._v("意见反馈")]), t._v(" "), t._m(15)]), t._v(" "), s("div", {
						class: "business" == t.type ? "right_content active business" : "right_content  business"
					}, [s("div", {
						staticClass: "business_content active",
						attrs: {
							id: "business_responsible"
						}
					}, [t._m(16), t._v(" "), s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox8.content)
						}
					})]), t._v(" "), s("div", {
						staticClass: "business_content",
						attrs: {
							id: "business_tnc"
						}
					}, [t._m(17), t._v(" "), s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox3.content)
						}
					})]), t._v(" "), s("div", {
						staticClass: "business_content",
						attrs: {
							id: "business_privacy"
						}
					}, [t._m(18), t._v(" "), s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox2.content)
						}
					})]), t._v(" "), s("div", {
						staticClass: "business_content",
						attrs: {
							id: "business_disclaimer"
						}
					}, [t._m(19), t._v(" "), s("div", {
						staticClass: "right_content_body",
						domProps: {
							innerHTML: t._s(t.dataBox3.content)
						}
					})])]), t._v(" "), s("div", {
						class: "contact_us" == t.type ? "right_content active contact_us" : "right_content  contact_us"
					}, [s("div", {
						staticClass: "right_content_header"
					}, [t._v("联系我们")]), t._v(" "), s("div", {
						staticClass: "right_content_body"
					}, [s("div", {
						domProps: {
							innerHTML: t._s(t.dataBox4.content)
						}
					}), t._v(" "), s("div", {
						staticClass: "contact_list",
						staticStyle: {
							"margin-top": "20px"
						}
					}, [s("a", {
						staticClass: "contact_content",
						attrs: {
							href: "javascript:;",
							target: "_self"
						},
						on: {
							click: t.$parent.openKefu
						}
					}, [t._m(20), t._v(" "), t._m(21)])])])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "svg",
							attrs: {
								alt: "",
								src: "/static/image/about01.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "svg",
							attrs: {
								alt: "",
								src: "/static/image/about02.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "abountus_guide_content"
						}, [s("a", {
							staticClass: "guide_a active",
							attrs: {
								"data-content": "guide_register"
							}
						}, [t._v("开户")]), t._v(" "), s("a", {
							staticClass: "guide_a",
							attrs: {
								"data-content": "guide_deposit"
							}
						}, [t._v("存款")]), t._v(" "), s("a", {
							staticClass: "guide_a",
							attrs: {
								"data-content": "guide_withdrawal"
							}
						}, [t._v("取款")]), t._v(" "), s("a", {
							staticClass: "guide_a",
							attrs: {
								"data-content": "guide_transfer"
							}
						}, [t._v("转账")]), t._v(" "), s("a", {
							staticClass: "guide_a",
							attrs: {
								"data-content": "guide_browser"
							}
						}, [t._v("浏览器格式")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "svg",
							attrs: {
								alt: "",
								src: "/static/image/about03.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "svg",
							attrs: {
								alt: "",
								src: "/static/image/about05.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "abountus_business_content"
						}, [a("a", {
							staticClass: "business_a active",
							attrs: {
								"data-content": "business_responsible"
							}
						}, [this._v("博彩责任")]), this._v(" "), a("a", {
							staticClass: "business_a",
							attrs: {
								"data-content": "business_privacy"
							}
						}, [this._v("隐私政策")]), this._v(" "), a("a", {
							staticClass: "business_a",
							attrs: {
								"data-content": "business_disclaimer"
							}
						}, [this._v("免责声明")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("img", {
							staticClass: "svg",
							attrs: {
								alt: "",
								src: "/static/image/about06.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "guide_content active",
							attrs: {
								id: "guide_register"
							}
						}, [s("div", {
							staticClass: "right_content_header"
						}, [t._v("新手指南 "), s("span", [t._v("| 开户")])]), t._v(" "), s("div", {
							staticClass: "right_content_body"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何注册？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("点击网站右上角 “注册” 按钮，并依照页面提示填写资料，即可完成注册。")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("【APP/网页手机版】")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("点击主页下方中央红色 “登录” 按钮，再点击登入页面下方 “注册” 按钮，依照页面提示填写资料，即可完成注册。")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("忘记账号？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("若您忘记了您的账号，敬请联系 24 小时在线客服，将有专人为您服务！")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("忘记密码？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("您可在登入页面中，透过忘记密码功能，填写您的会员帐号与手机号码，即可取回您当初设置的密码。当您无法收取手机短信时，您也可以联系 24 小时在线客服人员，协助您取回您的账号密码。")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何修改个人信息?")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("注册成功后，您可在 “账户安全中心” 绑定您的个人信息，基于安全考量，绑定个人信息后，不得擅自修改。如欲更新您的个人信息及资料，敬请联系我们的 24 小时在线客服人员，我们将会与您核实您的身份信息，并为您更新您的资料。")])])])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "right_content_header"
						}, [this._v("新手指南 "), a("span", [this._v("| 存款")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "question"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("如何于【网页版】申请存款？")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "question"
						}, [a("div", [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "title"
						}, [this._v("如何于【APP/手机网页版】申请存款？")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "mdetails_content active",
							attrs: {
								id: "mpay_offline"
							}
						}, [a("div", {
							staticClass: "answer_content"
						}, [a("p", [this._v("进入 “存款” 后，选择您方便使用的存款通道，依照提示步骤进行存款即可。")])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "guide_content",
							attrs: {
								id: "guide_withdrawal"
							}
						}, [s("div", {
							staticClass: "right_content_header"
						}, [t._v("新手指南 "), s("span", [t._v("| 取款")])]), t._v(" "), s("div", {
							staticClass: "right_content_body"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何于【网页版】取款？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("首次取款请先绑定您的银行卡及设置取款密码。")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何于【APP/手机网页版】取款？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("首次取款请先绑定您的银行卡及设置取款密码。")])])])])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "guide_content",
							attrs: {
								id: "guide_transfer"
							}
						}, [s("div", {
							staticClass: "right_content_header"
						}, [t._v("新手指南 "), s("span", [t._v("| 转账")])]), t._v(" "), s("div", {
							staticClass: "right_content_body"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何于【网页版】转账?")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("于免转模式中，您将无需手动进行任何操作，账户中的金钱将会在您进入游戏时，自动转入游戏钱包中。若于一般模式中。")])])])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("div", {
							staticClass: "question"
						}, [s("div", [s("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "title"
						}, [t._v("如何于【APP/手机网页版】转账？")])]), t._v(" "), s("div", {
							staticClass: "answer"
						}, [s("div", {
							staticClass: "answer_content"
						}, [s("p", [t._v("于免转模式中，您将无需手动进行任何操作，账户中的金钱将会在您进入游戏时，自动转入游戏钱包中。若于一般模式中。")])])])])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "guide_content",
							attrs: {
								id: "guide_browser"
							}
						}, [s("div", {
							staticClass: "right_content_header"
						}, [t._v("新手指南 "), s("span", [t._v("| 浏览器格式")])]), t._v(" "), s("div", {
							staticClass: "right_content_body"
						}, [s("p", {
							staticClass: "right_content_title"
						}, [t._v("为了让您有更完善且快速的体验，建议您更换为以下几款游览器")]), t._v(" "), s("p"), t._v(" "), s("div", {
							staticClass: "d-flex justify-content-between"
						}, [s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser huanyu"
						}), t._v("\n                  寰宇浏览器\n                ")]), t._v(" "), s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser chrome"
						}), t._v("\n                  谷歌浏览器\n                ")]), t._v(" "), s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser firefox"
						}), t._v("\n                  火狐浏览器\n                ")]), t._v(" "), s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser qq"
						}), t._v("\n                  QQ浏览器\n                ")]), t._v(" "), s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser sogou"
						}), t._v("\n                  搜狗浏览器\n                ")]), t._v(" "), s("a", {
							staticClass: "text-center d-block",
							attrs: {
								href: "javascript:;",
								target: "_self"
							}
						}, [s("div", {
							staticClass: "guide_browser ie360"
						}), t._v("\n                  360浏览器\n                ")])])])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "right_content_body"
						}, [s("form", {
							attrs: {
								id: "feedback_form",
								autocomplete: "off"
							}
						}, [s("div", {
							staticClass: "feedback_div"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("label", [t._v("帐号")])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("input", {
							staticClass: "fbinput",
							attrs: {
								type: "text",
								placeholder: "帐号",
								id: "feedbackusername",
								name: "feedbackusername",
								value: "584521"
							}
						}), t._v(" "), s("div", {
							staticClass: "error_msg username_error"
						})])]), t._v(" "), s("div", {
							staticClass: "feedback_div"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("label", [t._v("类别")])]), t._v(" "), s("div", {
							staticClass: "block_content feedback_select_bg"
						}, [s("ul", {
							staticClass: "selection_style",
							attrs: {
								id: "category"
							}
						}, [s("li", {
							staticClass: "init",
							attrs: {
								"data-value": ""
							}
						}, [t._v("请选择")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "1"
							}
						}, [t._v("APP客户端")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "2"
							}
						}, [t._v("游戏平台")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "3"
							}
						}, [t._v("代理相关")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "4"
							}
						}, [t._v("存取款")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "5"
							}
						}, [t._v("优惠")]), t._v(" "), s("li", {
							attrs: {
								"data-value": "6"
							}
						}, [t._v("其他问题")])]), t._v(" "), s("input", {
							attrs: {
								id: "category_input",
								name: "category",
								type: "hidden"
							}
						}), t._v(" "), s("div", {
							staticClass: "error_msg category_error"
						})])]), t._v(" "), s("div", {
							staticClass: "feedback_div"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("label", [t._v("标题")])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("input", {
							staticClass: "fbinput",
							attrs: {
								type: "text",
								placeholder: "标题",
								id: "title",
								name: "title"
							}
						}), t._v(" "), s("div", {
							staticClass: "error_msg title_error"
						})])]), t._v(" "), s("div", {
							staticClass: "feedback_div"
						}, [s("div", {
							staticClass: "block_content"
						}, [s("label", [t._v("内容")])]), t._v(" "), s("div", {
							staticClass: "block_content"
						}, [s("textarea", {
							staticClass: "fbinput",
							attrs: {
								placeholder: "内容",
								id: "message",
								name: "message"
							}
						}), t._v(" "), s("div", {
							staticClass: "error_msg message_error"
						})])]), t._v(" "), s("button", {
							staticClass: "btn btn_style btn-block",
							attrs: {
								type: "button",
								id: "feedback_submit_btn"
							}
						}, [t._v("提交")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "right_content_header"
						}, [this._v("企业事务 "), a("span", [this._v("| 博彩责任")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "right_content_header"
						}, [this._v("企业事务 "), a("span", [this._v("| 规则条款")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "right_content_header"
						}, [this._v("企业事务 "), a("span", [this._v("| 隐私政策")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "right_content_header"
						}, [this._v("企业事务 "), a("span", [this._v("| 免责声明")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							staticClass: "blue",
							attrs: {
								alt: "",
								src: "/static/image/icon_cs_hover.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "cs_text"
						}, [this._v("24小时在线客服 "), a("span", {
							staticClass: "cs_no_1"
						}, [this._v(" 1 ")])])
					}
				]
			};
		var G = s("VU/8")(R, V, !1, function(t) {
			s("FqGo")
		}, "data-v-28d8a576", null).exports,
			M = {
				name: "discount",
				data: function() {
					return {
						activitytypeList: [],
						actType: "",
						activitylistList: [],
						img: [{
							url1: "/static/image/163464685189224_zh_hans_inactive_icon.png",
							url2: "/static/image/163460721276620_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460722699059_zh_hans_inactive_icon.png",
							url2: "/static/image/163460722670907_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460724190692_zh_hans_inactive_icon.png",
							url2: "/static/image/163460724197603_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}, {
							url1: "/static/image/163460726082947_zh_hans_inactive_icon.png",
							url2: "/static/image/163460726089973_zh_hans_active_icon.png"
						}]
					}
				},
				created: function() {
					this.activitytype(), this.activitylist()
				},
				methods: {
					activitytype: function() {
						var t = this;
						t.$apiFun.post("/api/activitytype", {}).then(function(a) {
							console.log(a), 200 !== a.code && t.$parent.showTost(0, a.message), 200 === a.code && (t.activitytypeList = a.data)
						})
					},
					activitylist: function() {
						var t = this,
							a = "" == t.actType ? {} : {
								type: t.actType
							};
						t.$parent.showLoading(), t.$apiFun.post("/api/activitylist", a).then(function(a) {
							console.log(a), 200 !== a.code && t.$parent.showTost(0, a.message), 200 === a.code && (t.activitylistList = a.data.data), t.$parent.hideLoading()
						})
					},
					changActType: function(t) {
						t != this.actType && (this.actType = t, this.activitylist())
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, O = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "innerpage promo_inner"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "promo_layout_container layout_1200 gotop_area"
					}, [s("div", {
						staticClass: "promo_list_area"
					}, [s("div", {}, [s("div", {
						staticClass: "promo_tab"
					}, [s("div", {
						class: "" == t.actType ? "content_block active" : "content_block",
						on: {
							click: function(a) {
								return t.changActType("")
							}
						}
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "promo_text"
					}, [t._v("全部优惠")])]), t._v(" "), t._l(t.activitytypeList, function(a, e) {
						return s("div", {
							key: e,
							class: t.actType == a.id ? "content_block category_3 active" : "content_block category_3",
							on: {
								click: function(s) {
									return t.changActType(a.id)
								}
							}
						}, [s("div", {
							staticClass: "promo_icon cate_3"
						}, [s("img", {
							staticClass: "icon_onshow",
							attrs: {
								src: t.img[e].url1,
								onerror: "this.onerror=null;this.src='image/img_fallback_html1.png';"
							}
						}), t._v(" "), s("img", {
							staticClass: "icon_onhover",
							attrs: {
								src: t.img[e].url2,
								onerror: "this.onerror=null;this.src='image/img_fallback_html1.png';"
							}
						})]), t._v(" "), s("div", {
							staticClass: "promo_text"
						}, [t._v(t._s(a.name))])])
					})], 2)]), t._v(" "), t.activitylistList.length > 0 ? s("div", {
						staticClass: "promo_list",
						attrs: {
							id: "promo_list"
						}
					}, t._l(t.activitylistList, function(a, e) {
						return s("a", {
							key: e,
							staticClass: "block_content",
							on: {
								click: function(s) {
									return t.$parent.goNav("/discountInfo?id=" + a.id)
								}
							}
						}, [s("div", {
							staticClass: "card_container"
						}, [s("div", {
							staticClass: "left_block"
						}, [s("div", {
							staticClass: "price_block"
						}, [s("div", {
							staticClass: "can_get"
						}, [t._v(t._s(a.title))])])]), t._v(" "), s("div", {
							staticClass: "right_block"
						}, [s("div", {
							staticClass: "img_block"
						}, [s("img", {
							staticClass: "fallback middle",
							attrs: {
								alt: "",
								src: a.banner,
								loading: "lazy"
							}
						})]), t._v(" "), s("div", {
							staticClass: "detail_block"
						}, [s("div", {
							staticClass: "title_container"
						}, [s("div", {
							staticClass: "title"
						}, [t._v(t._s(a.title))]), t._v(" "), t._m(2, !0)]), t._v(" "), s("div", {
							staticClass: "date"
						}, [t._v(t._s(a.created_at))])])])])])
					}), 0) : t._e(), t._v(" "), s("div", {
						staticClass: "pagination-lg",
						attrs: {
							id: "tablePaging"
						}
					})])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "layout_1920 index_banner_area"
						}, [a("div", {
							staticClass: "swiper-container",
							attrs: {
								id: "promo_banner"
							}
						}, [a("div", {
							staticClass: "swiper-wrapper"
						}, [a("div", {
							staticClass: "swiper-slide"
						}, [a("img", {
							staticClass: "fallback large",
							attrs: {
								alt: "",
								src: "/static/image/promo_banner.png"
							}
						})])])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "promo_icon all"
						}, [a("img", {
							staticClass: "icon_onshow",
							attrs: {
								src: "/static/image/promo_all.png",
								onerror: "this.onerror=null;this.src='image/img_fallback_html1.png';"
							}
						}), this._v(" "), a("img", {
							staticClass: "icon_onhover",
							attrs: {
								src: "/static/image/promo_all_a.png",
								onerror: "this.onerror=null;this.src='image/img_fallback_html1.png';"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "promo_arrow"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/arrow_right.png"
							}
						})])
					}
				]
			};
		var W = s("VU/8")(M, O, !1, function(t) {
			s("KmkR")
		}, "data-v-18a2285b", null).exports,
			Y = {
				name: "discountInfo",
				data: function() {
					return {
						dataInfo: {}
					}
				},
				created: function() {
					var t = this.$route.query;
					t.id && this.getInfo(t.id)
				},
				methods: {
					getInfo: function(t) {
						var a = this;
						a.$parent.showLoading(), a.$apiFun.post("/api/activitydeatil", {
							id: t
						}).then(function(t) {
							console.log(t), 200 !== t.code && a.$parent.showTost(0, t.message), 200 === t.code && (a.dataInfo = t.data), a.$parent.hideLoading()
						})
					},
					doactivityapply: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/doactivityapply", {
							activityid: t.dataInfo.id
						}).then(function(a) {
							t.$parent.hideLoading(), t.$parent.showTost(1, a.message)
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, Z = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "innerpage promo_inner"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "promo_layout_container layout_1200 gotop_area",
						staticStyle: {
							background: "#fff",
							transform: "translateY(-75px) !important"
						}
					}, [s("div", {
						staticClass: "promo_popup_container"
					}, [s("div", {
						staticClass: "promo_popup_title",
						staticStyle: {
							color: "#000"
						}
					}, [t._v(t._s(t.dataInfo.title))]), t._v(" "), s("div", {
						staticClass: "promo_popup_datetime"
					}, [t._v(t._s(t.dataInfo.created_at))]), t._v(" "), s("div", {
						staticClass: "promo_popup_content",
						staticStyle: {
							color: "#000!important"
						},
						domProps: {
							innerHTML: t._s(t.dataInfo.content)
						}
					}), t._v(" "), s("div", {
						staticClass: "promo_popup_content",
						staticStyle: {
							color: "#000!important"
						},
						domProps: {
							innerHTML: t._s(t.dataInfo.memo)
						}
					})]), t._v(" "), s("div", {
						staticStyle: {
							"border-top": "1px solid #d2d2d2"
						}
					}), t._v(" "), s("div", {
						staticClass: "box"
					}, [s("form", {
						attrs: {
							name: "mform"
						}
					}, [s("p", {
						staticClass: "t14"
					}, [t._v("申请方式")]), t._v(" "), s("p", [s("span", [t._v("会员帐号：")]), t._v(" "), s("input", {
						attrs: {
							type: "text",
							placeholder: "填写会员帐号",
							disabled: ""
						},
						domProps: {
							value: t.$store.state.userInfo.username || ""
						}
					})]), t._v(" "), s("p", [s("input", {
						staticClass: "subbtn",
						attrs: {
							type: "button",
							value: "立即提交"
						},
						on: {
							click: t.doactivityapply
						}
					})])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "layout_1920 index_banner_area"
						}, [a("div", {
							staticClass: "swiper-container",
							attrs: {
								id: "promo_banner"
							}
						}, [a("div", {
							staticClass: "swiper-wrapper"
						}, [a("div", {
							staticClass: "swiper-slide"
						}, [a("img", {
							staticClass: "fallback large",
							attrs: {
								alt: "",
								src: "/static/image/promo_banner.png"
							}
						})])])])])
					}
				]
			};
		var K = s("VU/8")(Y, Z, !1, function(t) {
			s("SVU7")
		}, "data-v-3e5e2f62", null).exports,
			H = {
				name: "vip",
				data: function() {
					return {
						vipLis: [],
						bfNum: 0,
						baseURL: "",
						ok: !1
					}
				},
				created: function() {
					this.baseURL = sessionStorage.getItem("baseURL") || "", this.uservip()
				},
				methods: {
					getbfNum: function() {
						var t = 0,
							a = 1 * this.$store.state.userInfo.vip;
						this.vipLis.forEach(function(s, e) {
							console.log(), e == a && (t = 1 * s.recharge)
						});
						var s = 1 * this.$store.state.userInfo.paysum,
							e = 0 == s || 0 == t ? 0 : Math.round(s / t * 100);
						this.bfNum = e > 100 ? 100 : e
					},
					uservip: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/uservip", {}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.vipLis = a.data, t.getbfNum()), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {
					if (this.ok) {
						this.ok = !1, $(function() {
							var t = $(".swiper-slide-active img").data("src-active");
							$(".swiper-slide-active .vip_item .icon img").attr("src", t);
							var a = $(".vip_btn.active").find("img").data("src-active");
							$(".vip_btn.active img").attr("src", a)
						});
						var t = new Swiper(".swiper-container", {
							spaceBetween: 10,
							centeredSlides: !0,
							slidesPerView: "auto",
							navigation: {
								nextEl: ".viplist-swiper-button-next",
								prevEl: ".viplist-swiper-button-prev"
							}
						}),
							a = new Swiper(".vip-swiper-container", {
								slidesPerView: "auto",
								spaceBetween: 100,
								centeredSlides: !0,
								initialSlide: 1,
								slideToClickedSlide: !0,
								navigation: {
									nextEl: ".vip-swiper-button-next",
									prevEl: ".vip-swiper-button-prev"
								}
							});
						a.on("slideChange", function() {
							var s = $(".vip_btn.active img").attr("src"),
								e = a.realIndex;
							$(".vip_btn.active img").attr("src", s), 0 == a.isBeginning && 0 == a.isEnd ? $(".vip-swiper-button-prev , .vip-swiper-button-next").show() : a.isBeginning ? ($(".vip-swiper-button-next").show(), $(".vip-swiper-button-prev").hide()) : ($(".vip-swiper-button-prev").show(), $(".vip-swiper-button-next").hide());
							var i = $(".swiper-slide-active .vip_item .icon img").attr("src");
							if ($(".swiper-slide-active .vip_item .icon img").attr("src", i), $(".swiper-slide-active .vip_item .icon img").each(function(t, a) {
								var s = $(this).data("src");
								$(this).attr("src", s)
							}), $(".swiper-slide-active .table1 img").each(function(t, a) {
								var s = $(this).attr("src").slice(0, -6) + ".png";
								$(this).attr("src", s)
							}), $(".swiper-slide-active .table2 img").each(function(t, a) {
								var s = $(this).attr("src").slice(0, -4) + ".png";
								$(this).attr("src", s)
							}), $(".vip_btn").removeClass("active"), $(".vip_btn").eq(e).addClass("active"), $(".swiper-slide:nth-child(" + (e + 1) + ")").find(".vip_item .icon img").each(function(t, a) {
								var s = $(this).data("src-active");
								$(this).attr("src", s)
							}), $(".swiper-slide:nth-child(" + (e + 1) + ")").find(".table1 img").each(function(t, a) {
								var s = $(this).attr("src").slice(0, -4) + "_a.png";
								$(this).attr("src", s)
							}), $(".swiper-slide:nth-child(" + (e + 1) + ")").find(".table2 img").each(function(t, a) {
								var s = $(this).attr("src").slice(0, -4) + ".png";
								$(this).attr("src", s)
							}), $(".vip_btn").length > 10) var n = 10;
							else n = $(".vip_btn").length;
							e / 10 >= 1 ? t.slideTo(Math.floor(e / 10)) : t.slideTo(0);
							var o = e % 10 / (n - 1) * 100;
							$(".vip_list_btn .progress-bar").css("width", o + "%")
						}), t.on("slideChange", function() {
							var a = $(".vip-swiper-container .swiper-slide-active").index(),
								s = t.activeIndex;
							if (s == Math.floor(a / 10)) {
								if ($(".vip_btn").length > 10) var e = 10;
								else e = $(".vip_btn").length;
								var i = a % 10 / (e - 1) * 100;
								$(".vip_list_btn .progress-bar").css("width", i + "%")
							} else s < Math.floor(a / 10) ? $(".vip_list_btn .progress-bar").css("width", "100%") : $(".vip_list_btn .progress-bar").css("width", "0%");
							$(".vip_group_list > div").removeClass("active"), $(".vip_group_list > div:nth-child(" + (s + 1) + ")").addClass("active")
						}).on("slideChangeTransitionEnd", function() {
							var t = $(".swiper_vip_bar .swiper-slide-next").data("length"),
								a = $(".swiper_vip_bar .swiper-slide-prev").data("length");
							void 0 !== a ? $("#viplist_prev").html(a) : $("#viplist_prev").html(""), void 0 !== t ? $("#viplist_next").html(t) : $("#viplist_next").html("")
						}), $(".vip_group_list > div").click(function() {
							var a = $(this).index();
							t.slideTo(a)
						}), $(".vip_btn").click(function() {
							var t = $(this).data("id");
							a.slideTo(t)
						}), $(".vip_detail_button").click(function() {
							loadFileFunction($("#vip_detail_Modal .modal-content"), "https://www.9500aa55.com/viplevel/vipViewAll", !0)
						}), $(".vip_type_container .arrow").click(function() {
							$(".vip_type_container .vip_type_list, .vip_type_container .arrow").toggleClass("active")
						})
					}
				},
				beforeDestroy: function() {}
			}, X = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area",
						staticStyle: {
							"min-height": "calc((100vh - 110px) - 110px)"
						}
					}, [s("div", {
						staticClass: "layout_1920 index_banner_area slash vip_layout"
					}, [s("img", {
						staticClass: "banner",
						attrs: {
							alt: "",
							src: "https://7148ssss.com/web/templateimage/vip/vip_top_banner.png"
						}
					}), t._v(" "), s("div", {
						staticClass: "layout_1200"
					}, [t._m(0), t._v(" "), t.$store.state.token ? s("div", {
						staticClass: "vip_progress_status"
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "vip_status"
					}, [s("div", {
						staticClass: "progress_level"
					}, [s("div", {
						staticClass: "vip_left"
					}, [t._m(2), t._v(" "), s("div", [t._v(t._s(t.$store.state.userInfo.current_vip))])]), t._v(" "), s("div", {
						staticClass: "vip_right"
					}, [s("div", {
						staticClass: "vip_benefits btn_txt vip_detail_button",
						staticStyle: {
							height: "18px"
						}
					}), t._v(" "), s("div", [t._v(t._s(t.$store.state.userInfo.next_vip))])])]), t._v(" "), s("div", {
						staticClass: "progress"
					}, [s("div", {
						staticClass: "progress-bar progressbar_ongoing",
						style: "width: " + t.bfNum + "%",
						attrs: {
							role: "progressbar",
							"aria-valuenow": "0",
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}
					}), t._v(" "), s("div", {
						staticClass: "percentage_num"
					}, [t._v(t._s(t.bfNum) + "%")])])])]) : t._e(), t._v(" "), s("div", {
						staticClass: "vip_list_btn"
					}, [s("div", {
						staticClass: "swiper-container swiper_vip_bar swiper-container-initialized swiper-container-horizontal"
					}, [s("div", {
						staticClass: "swiper-wrapper",
						attrs: {
							id: "swiper-progress-bar"
						}
					}, [s("div", {
						staticClass: "swiper-slide swiper-slide-active",
						staticStyle: {
							width: "840px",
							"margin-right": "10px"
						},
						attrs: {
							"data-length": "金卡 - 鑽石卡Ⅱ"
						}
					}, [s("div", {
						staticClass: "vip_btn_area"
					}, t._l(t.vipLis, function(a, e) {
						return s("div", {
							key: e,
							class: 0 == e ? "vip_btn active" : "vip_btn",
							attrs: {
								"data-id": e
							}
						}, [s("span", {
							attrs: {
								title: a.vipname
							}
						}, [t._v(t._s(a.vipname))])])
					}), 0)])]), t._v(" "), s("span", {
						staticClass: "swiper-notification",
						attrs: {
							"aria-live": "assertive",
							"aria-atomic": "true"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "vip-swiper-container swiper-container-initialized swiper-container-horizontal",
						attrs: {
							id: "swiper-list-detail"
						}
					}, [s("div", {
						staticClass: "swiper-wrapper",
						staticStyle: {
							"transition-duration": "0ms",
							transform: "translate3d(-3296.43px, 0px, 0px)"
						}
					}, t._l(t.vipLis, function(a, e) {
						return s("div", {
							key: e,
							staticClass: "swiper-slide",
							staticStyle: {
								width: "364.286px",
								"margin-right": "100px"
							},
							attrs: {
								"data-id": e
							}
						}, [s("div", {
							staticClass: "vip_item"
						}, [t._m(3, !0), t._v(" "), s("div", {
							staticClass: "table1"
						}, [s("table", [s("tbody", [s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("VIP等级")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [t._v(t._s(a.vipname))])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("真人返水")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [t._v(t._s(a.realperson) + "%")])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("电子返水")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [t._v(t._s(a.electron) + "%")])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("\n                        棋牌返水\n                      ")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [s("div", [t._v(t._s(a.joker) + "%")])])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("\n                        体育返水\n                      ")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [s("div", [t._v(t._s(a.sport) + "%")])])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("\n                        彩票返水\n                      ")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [s("div", [t._v(t._s(a.lottery) + "%")])])]), t._v(" "), s("tr", [s("td", {
							staticClass: "vip_card_label"
						}, [t._v("\n                        电竞返水\n                      ")]), t._v(" "), s("td", {
							staticClass: "vip_card_value"
						}, [s("div", [t._v(t._s(a.e_sport) + "%")])])])])])]), t._v(" "), s("div", {
							staticClass: "table3"
						}, [s("table", [s("tbody", [t._m(4, !0), t._v(" "), s("tr", [s("td", [t._v("累计流水")]), t._v(" "), s("td", [t._v(t._s(a.flow))])]), t._v(" "), s("tr", [s("td", [t._v("累计充值")]), t._v(" "), s("td", [t._v(t._s(a.recharge))])])])])])])])
					}), 0), t._v(" "), s("span", {
						staticClass: "swiper-notification",
						attrs: {
							"aria-live": "assertive",
							"aria-atomic": "true"
						}
					})]), t._v(" "), s("div", {
						staticClass: "vip_detail2"
					}, [t._m(5), t._v(" "), s("div", {
						staticClass: "vip_details_tag_part"
					}, [s("div", [t._v("生日礼金")]), t._v(" "), s("div", [t._v("会员需在" + t._s(t.$store.state.appInfo.title) + "注册并激活一个月以上；提交您的会员账号、手持身份证照至 24 小时" + t._s(t.$store.state.appInfo.title) + "客服，即会有专员协助进行办理。仅限生日当天申请，且一年只能成功申请一次，当天生日必须在当天 23:59 前完成申请，逾期无效。")])]), t._v(" "), t._m(6)]), t._v(" "), s("hr", {
						staticClass: "vip_hr"
					}), t._v(" "), s("div", {
						staticClass: "vip_detail3"
					}, [t._v("\n        活动时间：即日起"), s("br"), t._v("\n        活动对象：" + t._s(t.$store.state.appInfo.title) + "全体会员"), s("br"), t._v("\n        活动内容：加入" + t._s(t.$store.state.appInfo.title) + "，站在世界中心，决定自己的高度，尊享星级专属礼遇。"), s("br"), t._v("\n        申请方式：优惠无需申请，当会员的晋级条件满足时，系统将自动升级账号，即可于次日 1 点前晋级为对应的 VIP 等级。"), s("br"), t._v(" "), s("br"), t._v("\n        活动规则："), s("br"), t._v("\n        1. 晋升顺序：达到指定晋级条件可越级晋升。(例如：刘先生1月1号注册游戏账号，当期更新直接投注1000万，并达成累积存款300万，自动晋级为紅寶卡Ⅴ，即可获得8+38+88+188+388+888=1598元晋级彩金，享受高额福利。）"), s("br"), t._v("\n        2. 所有彩金需达成 1 倍流水才能取款。"), s("br"), t._v("\n        3. 所有 VIP 会员享受的优惠按照系统自动晋级时的等级为准派发，若有相关活动疑问请即时联系专属客服服务。"), s("br"), t._v("\n        4. " + t._s(t.$store.state.appInfo.title) + "具有即时修订权和最终解释权。" + t._s(t.$store.state.appInfo.title) + "也保留随时终止活动的权利，并不做提前通知。\n      ")])])]), t._v(" "), t._m(7)])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "myvip_desc_content"
						}, [a("div", {
							staticClass: "desc_container"
						}, [a("div", {
							staticClass: "text"
						}, [this._v("VIP金沙會")])]), this._v(" "), a("div", {
							staticClass: "desc"
						}, [this._v("专享独特权益")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "logo"
						}, [a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "https://static.lllcrypto.com/bo/VIP/vip21634030573.png",
								width: "80%"
							}
						})])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "level_title"
						}, [this._v("我的"), a("span", [this._v("VIP")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "https://static.lllcrypto.com/bo/VIP/vip1634905806.png",
								"data-src": "https://static.lllcrypto.com/bo/VIP/vip1634905806.png",
								"data-src-active": "https://static.lllcrypto.com/bo/VIP/vip21634905806.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("tr", [a("th"), this._v(" "), a("th", [this._v("晋级条件")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "vip_details_tag_part"
						}, [a("div", [this._v("晋级礼金")]), this._v(" "), a("div", [this._v("晋级条件达到后点击一键领取，系统自动派送。")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "vip_details_tag_part"
						}, [a("div", [this._v("佳节礼金")]), this._v(" "), a("div", [this._v("春节/端午/中秋，佳节前三个月需有效存款加投注5000+，符合条件彩金将于节庆当天的03:00前系统自动派发。")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "modal fade largelarge",
							attrs: {
								id: "vip_detail_Modal"
							}
						}, [a("div", {
							staticClass: "modal-dialog",
							attrs: {
								role: "document"
							}
						}, [a("div", {
							staticClass: "modal-content"
						})])])
					}
				]
			};
		var J = s("VU/8")(H, X, !1, function(t) {
			s("smfB")
		}, "data-v-1214475d", null).exports,
			Q = s("c/Tr"),
			tt = s.n(Q),
			at = {
				name: "message",
				data: function() {
					return {
						path: "",
						baseURL: "",
						bfNum: 0,
						vipLis: [],
						setShow: !1,
						mobile: null,
						email: null,
						birthday: null,
						passwordInfo: {},
						info: {}
					}
				},
				created: function() {
					var t = JSON.parse(localStorage.getItem("userInfo"));
					this.mobile = t.mobile, this.email = t.email, this.birthday = t.birthday, this.baseURL = sessionStorage.getItem("baseURL") || "", this.uservip()
				},
				methods: {
					onchangemd: function(t) {
						var a = this;
						console.log(t.target.files);
						var s = new FormData;
						tt()(t.target.files).map(function(t) {
							console.log(t), s.append("file", t)
						}), a.showLoading(), a.$apiFun.post("/api/uploadimg", s).then(function(t) {
							a.$parent.getUserInfo(), a.hideLoading()
						})
					},
					focusTab: function(t) {
						this.$parent.focusTab(t)
					},
					shenqing: function() {
						var t = this;
						t.birthday = $(".ant-picker-input").html();
						var a = t.info;
						/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(a.mobile) ? a.apply_info ? (t.showLoading(), t.$apiFun.post("/api/applyagentdo", a).then(function(a) {
								t.showTost(1, a.message), t.hideLoading(), t.info = {}, t.clreaInfo()
							}).
							catch (function(a) {
								t.hideLoading()
							})) : t.showTost(0, "请输入申请理由") : t.showTost(0, "请输入正确手机号")
					},
					shuaCar: function() {
						this.$parent.getUsercard(), this.$parent.getUsdssList()
					},
					clreaInfo: function() {
						this.passwordInfo = {}, this.info = {}, this.cardInfo = {}, setTimeout(function() {
							$(".alert_msg").removeClass("active"), $(".alert_msg").removeClass("delay"), alertCheck = !0
						}, 1500)
					},
					getUserInfo: function() {
						this.$parent.getUserInfo()
					},
					editPassword: function(t) {
						var a = this;
						if (a.passwordInfo.password)
							if (a.passwordInfo.paypassword)
								if (a.passwordInfo.password.length < 6) a.$parent.showTost(0, "请输入正确的旧密码长度");
								else if (a.passwordInfo.paypassword.length < 6) a.$parent.showTost(0, "请输入正确的新密码长度");
						else if (a.passwordInfo.newpasword)
							if (a.passwordInfo.newpasword == a.passwordInfo.paypassword) {
								if (a.passwordInfo.password == a.passwordInfo.paypassword) return a.$parent.showTost(0, "新旧密码不能一致！"), void(a.passwordInfo = {});
								var s = 1 == t ? "/api/editPassword" : "/api/editPayPassword";
								a.showLoading(), a.$apiFun.post(s, a.passwordInfo).then(function(s) {
									console.log(s), 200 != s.code && a.$parent.showTost(0, s.message), a.hideLoading(), 200 == s.code && (a.$parent.showTost(1, "密码修改成功！"), a.passwordInfo = {}, a.clreaInfo(), 1 == t && (sessionStorage.setItem("token", ""), a.$store.commit("changToken"), a.$router.push({
										path: "/homes"
									})))
								})
							} else a.$parent.showTost(0, "两次密码不一致！");
							else a.$parent.showTost(0, "请输入确认密码");
							else a.$parent.showTost(0, "请输入新密码");
							else a.$parent.showTost(0, "请输入旧密码")
					},
					set_withdrawal_pins: function() {
						$("#set_withdrawal_pins").addClass("active").addClass("delay")
					},
					add_bankcard: function() {
						$("#add_bankcard").addClass("active").addClass("delay")
					},
					set_withdrawal_pin: function() {
						$("#set_withdrawal_pin").addClass("active").addClass("delay")
					},
					set_acct_password: function() {
						$("#set_acct_password").addClass("active").addClass("delay")
					},
					isOk: function() {
						var t = this,
							a = {
								email: t.email,
								mobile: t.mobile,
								birthday: t.birthday
							};
						/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t.mobile) ? /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(t.email) ? /^(\d{4})-(\d{2})-(\d{2})$/.test(t.birthday) ? (t.$parent.showLoading(), t.$apiFun.post("/api/updateuserinfo", a).then(function(s) {
								if (console.log(s), 200 != s.code && t.$parent.showTost(0, s.message), 200 == s.code) {
									var e = JSON.parse(localStorage.getItem("userInfo"));
									e.mobile = a.mobile, e.email = a.email, e.birthday = a.birthday, localStorage.setItem("userInfo", n()(e)), t.$parent.getUserInfo(), t.$parent.showTost(1, "操作成功"), t.setShow = !1
								}
								t.$parent.hideLoading()
							}).
							catch (function(a) {
								t.$parent.hideLoading()
							})) : t.$parent.showTost(0, "请输入正确的日期格式：YYYY-MM-DD") : t.$parent.showTost(0, "请输入正确邮箱号") : t.$parent.showTost(0, "请输入正确手机号")
					},
					openSet: function() {
						this.setShow = !this.setShow
					},
					getbfNum: function() {
						var t = 0,
							a = 1 * this.$store.state.userInfo.vip;
						this.vipLis.forEach(function(s, e) {
							console.log(), e == a && (t = 1 * s.recharge)
						});
						var s = 1 * this.$store.state.userInfo.paysum,
							e = 0 == s || 0 == t ? 0 : Math.round(s / t * 100);
						this.bfNum = e > 100 ? 100 : e
					},
					uservip: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/uservip", {}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.vipLis = a.data, t.getbfNum()), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					showLoading: function() {
						this.$parent.showLoading()
					},
					hideLoading: function() {
						this.$parent.hideLoading()
					},
					goNav: function(t) {
						this.$parent.goNav(t)
					},
					showTost: function(t, a) {
						this.$parent.showTost(t, a)
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {},
				watch: {
					$route: {
						immediate: !0,
						handler: function() {
							this.path = this.$route.path
						}
					}
				}
			}, st = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_area"
					}, [s("div", {
						staticClass: "profile_container"
					}, [s("div", {
						staticClass: "layout_1200"
					}, [s("div", {
						staticClass: "profile_header_container"
					}, [s("div", {
						staticClass: "profile_header_left"
					}, [s("div", {
						staticClass: "profile_header_img"
					}, [s("svg", {
						staticClass: "progress-ring",
						attrs: {
							width: "132",
							height: "132"
						}
					}, [s("circle", {
						attrs: {
							stroke: "#FFF",
							"stroke-width": "2",
							fill: "transparent",
							r: "62",
							cx: "66",
							cy: "66"
						}
					}), t._v(" "), s("circle", {
						staticClass: "progress-ring__circle",
						staticStyle: {
							"stroke-dasharray": "389.557, 389.557",
							"stroke-dashoffset": "389.557"
						},
						attrs: {
							stroke: "#5A8BF1",
							"stroke-width": "3",
							fill: "transparent",
							r: "62",
							cx: "66",
							cy: "66"
						}
					})]), t._v(" "), t.$store.state.userInfo.avatar ? s("img", {
						staticStyle: {
							width: "118px",
							"border-radius": "50%"
						},
						attrs: {
							src: t.$store.state.userInfo.avatar,
							alt: ""
						}
					}) : s("div", {
						staticClass: "bg-profile_icon"
					}), t._v(" "), s("input", {
						staticClass: "inputsw",
						attrs: {
							type: "file",
							single: "",
							accept: "image/gif,image/png"
						},
						on: {
							change: t.onchangemd
						}
					})]), t._v(" "), s("div", {
						staticClass: "profile_header_details"
					}, [s("div", {
						staticClass: "name"
					}, [t._v(t._s(t.$store.state.userInfo.username || ""))]), t._v(" "), s("div", {
						staticClass: "amount"
					}, [t._v(t._s(t.$store.state.userInfo.balance))]), t._v(" "), s("div", {
						on: {
							click: t.openSet
						}
					}, [s("button", {
						class: t.setShow ? "button_trans_green active" : "button_trans_green",
						attrs: {
							id: "secure_center_btn"
						}
					}, [s("img", {
						staticClass: "mr-2",
						attrs: {
							alt: "",
							src: "/static/image/safety.png"
						}
					}), t._v(" 账号安全中心\n                "), s("div", {
						staticClass: "arrow_pointer ml-2"
					})])])])]), t._v(" "), s("div", {
						staticClass: "profile_header_middle"
					}, [s("div", {
						staticClass: "profile_header_cta"
					}, [s("div", {
						class: "/profile" == t.path ? "active" : "",
						attrs: {
							"data-cta": "recordhistory"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile")
							}
						}
					}, [t._m(0), t._v("\n                钱包记录")])]), t._v(" "), s("div", {
						class: "/bankCard" == t.path ? "active" : "",
						attrs: {
							"data-cta": "mybankcard"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/bankCard")
							}
						}
					}, [t._m(1), t._v("\n                银行卡管理")])]), t._v(" "), 0 == t.$store.state.userInfo.isagent ? s("div", {
						staticClass: "set_withdrawal_pin",
						on: {
							click: t.set_withdrawal_pins
						}
					}, [t._m(2), t._v("\n              代理申请\n            ")]) : t._e(), t._v(" "), 1 == t.$store.state.userInfo.isagent ? s("div", {
						staticClass: "set_withdrawal_pin",
						on: {
							click: t.$parent.getAgentLoginUrl
						}
					}, [t._m(3), t._v("\n              代理登录\n            ")]) : t._e(), t._v(" "), s("div", {
						class: "/message" == t.path ? "active" : "",
						attrs: {
							"data-cta": "mymessage"
						}
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/message")
							}
						}
					}, [t._m(4), t._v("\n                我的信息")])])])]), t._v(" "), s("div", {
						staticClass: "profile_header_right"
					}, [s("div", {
						staticClass: "profile_header_vip btn_txt"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("vip")
							}
						}
					}, [s("span", [t._v("VIP")]), s("img", {
						attrs: {
							alt: "",
							src: "/static/image/slide_right_alt.png"
						}
					})])]), t._v(" "), s("div", {
						staticClass: "profile_header_vip_container",
						attrs: {
							id: "myvip_profile"
						}
					}, [s("div", {
						staticClass: "profile_header_vip_top"
					}, [s("div", {
						staticClass: "profile_header_vip_img"
					}, [s("div", {
						staticClass: "profile_header_vip_icon"
					}, [s("img", {
						staticStyle: {
							width: "46px !important",
							height: "auto"
						},
						attrs: {
							alt: "",
							src: t.baseURL + t.$store.state.userInfo.vipname
						}
					})])]), t._v(" "), s("div", {
						staticClass: "vip_name"
					}, [s("div", [t._v(t._s(t.$store.state.userInfo.current_vip))]), t._v(" "), s("div", {
						staticClass: "slider"
					}, [s("a", {
						on: {
							click: function(a) {
								return t.$parent.goNav("vip")
							}
						}
					}, [s("img", {
						attrs: {
							alt: "",
							src: "/static/image/slide_right.png",
							width: "24"
						}
					})])])])]), t._v(" "), s("div", {
						staticClass: "profile_header_vip_bottom"
					}, [s("div", {
						staticClass: "progress profile_header_vip_level_progress"
					}, [s("div", {
						staticClass: "progress-bar",
						style: "width: " + t.bfNum + "%;background: #ccc;",
						attrs: {
							role: "progressbar",
							"aria-valuenow": "0.00",
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}
					}), t._v(" "), s("div", {
						staticClass: "progress_percent"
					}, [t._v(t._s(t.bfNum) + "%")]), t._v(" "), s("div", {
						staticClass: "progress_left_text",
						attrs: {
							title: t.$store.state.userInfo.current_vip
						}
					}, [t._v(t._s(t.$store.state.userInfo.current_vip))]), t._v(" "), s("div", {
						staticClass: "progress_right_text",
						attrs: {
							title: t.$store.state.userInfo.next_vip
						}
					}, [t._v(t._s(t.$store.state.userInfo.next_vip))])])])])])]), t._v(" "), t.setShow ? s("div", {
						staticClass: "profile_secure_center",
						staticStyle: {
							display: "block"
						},
						attrs: {
							id: "profile_secure_center"
						}
					}, [s("div", [s("div", [s("div", {
						staticClass: "hints"
					}, [t._v("温馨提示：绑定资料让帐号更加安全！一经绑定，不可随意修改。如需修改资料，请联系 24 小时在线客服为您服务！")]), t._v(" "), s("div", {
						staticClass: "profile_manage_list"
					}, [s("a", {
						staticClass: "set_acct_password",
						on: {
							click: t.set_acct_password
						}
					}, [t._m(5), t._v("\n                帐号密码\n              ")]), t._v(" "), s("a", {
						staticClass: "set_withdraw_password set_withdrawal_pin",
						on: {
							click: t.set_withdrawal_pin
						}
					}, [t._m(6), t._v("\n                取款密码\n                "), s("div", {
						staticClass: "error_msg"
					}, [t._v("尚未设置")])])])]), t._v(" "), s("div", [s("div", {
						staticClass: "textbox_content profile_secure_center_textbox"
					}, [s("input", {
						staticClass: "fn",
						attrs: {
							type: "text",
							name: "account_name",
							id: "account_name",
							placeholder: "中文真实姓名",
							disabled: ""
						},
						domProps: {
							value: t.$store.state.userInfo.realname
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg personal_account_name_error_msg"
					})]), t._v(" "), s("div", {
						staticClass: "profile_secure_center_phone otp_verify_section"
					}, [s("div", {
						staticClass: "phone_num"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.mobile,
							expression: "mobile"
						}],
						staticClass: "mn",
						attrs: {
							type: "number",
							name: "mobile_number",
							id: "mobile_number",
							placeholder: "手机号",
							maxlength: "11",
							oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
						},
						domProps: {
							value: t.mobile
						},
						on: {
							input: function(a) {
								a.target.composing || (t.mobile = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg personal_mobile_number_error_msg"
					})])])]), t._v(" "), s("div", [s("div", {
						staticClass: "textbox_content profile_secure_center_textbox"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.email,
							expression: "email"
						}],
						staticClass: "email",
						attrs: {
							type: "text",
							id: "email",
							name: "email",
							placeholder: "电子邮箱"
						},
						domProps: {
							value: t.email
						},
						on: {
							input: function(a) {
								a.target.composing || (t.email = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg personal_email_error_msg"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content profile_secure_center_textbox"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.birthday,
							expression: "birthday"
						}],
						attrs: {
							type: "text",
							id: "dob",
							name: "dob",
							placeholder: "出生日期"
						},
						domProps: {
							value: t.birthday
						},
						on: {
							input: function(a) {
								a.target.composing || (t.birthday = a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg personal_dob_error_msg"
					})])])]), t._v(" "), t._m(7), t._v(" "), s("div", {
						attrs: {
							id: "personal_save_div"
						}
					}, [s("div", {
						staticClass: "opt_section_area"
					}, [s("div", {
						staticClass: "save_button",
						staticStyle: {
							width: "fit-content"
						}
					}, [s("button", {
						staticClass: "btn btn_major mx-auto",
						attrs: {
							id: "personal_info_btn"
						},
						on: {
							click: t.isOk
						}
					}, [t._v("保存")])])])])]) : t._e(), t._v(" "), s("router-view")], 1)]), t._v(" "), s("div", {
						staticClass: "alert_msg",
						attrs: {
							id: "set_withdrawal_pin"
						}
					}, [s("div", {
						staticClass: "alert_msg_pos"
					}, [s("div", {
						staticClass: "alert_msg_dialog"
					}, [t._m(8), t._v(" "), s("div", {
						staticClass: "alert_msg_body"
					}, [s("div", {
						staticClass: "msg_show"
					}), t._v(" "), s("div", {
						staticClass: "form_show"
					}, [s("div", {
						staticClass: "textbox_content mb-3 old_pin_div"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#old_pin"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.password,
							expression: "passwordInfo.password"
						}],
						staticClass: "pin",
						attrs: {
							type: "password",
							name: "old_pin",
							id: "old_pin",
							placeholder: "旧取款密码"
						},
						domProps: {
							value: t.passwordInfo.password
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "password", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_old_pin"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#new_pin"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.paypassword,
							expression: "passwordInfo.paypassword"
						}],
						staticClass: "pin",
						attrs: {
							type: "password",
							name: "new_pin",
							id: "new_pin",
							placeholder: "新取款密码"
						},
						domProps: {
							value: t.passwordInfo.paypassword
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "paypassword", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_new_pin"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#re_pin"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.newpasword,
							expression: "passwordInfo.newpasword"
						}],
						staticClass: "pin",
						attrs: {
							type: "password",
							name: "re_pin",
							id: "re_pin",
							placeholder: "再输入一次新取款密码"
						},
						domProps: {
							value: t.passwordInfo.newpasword
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "newpasword", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_re_pin"
					})])]), t._v(" "), s("div", {
						staticClass: "button_area"
					}, [s("div", {
						staticClass: "confirm_btn"
					}, [s("button", {
						staticClass: "btn w-100",
						on: {
							click: function(a) {
								return t.editPassword(2)
							}
						}
					}, [t._v("保存")])]), t._v(" "), s("div", {
						staticClass: "cancel_btn",
						on: {
							click: t.clreaInfo
						}
					}, [s("a", [t._v("取消")])])])])])])]), t._v(" "), s("div", {
						staticClass: "alert_msg",
						attrs: {
							id: "set_acct_password"
						}
					}, [s("div", {
						staticClass: "alert_msg_pos"
					}, [s("div", {
						staticClass: "alert_msg_dialog"
					}, [t._m(9), t._v(" "), s("div", {
						staticClass: "alert_msg_body"
					}, [s("div", {
						staticClass: "msg_show"
					}), t._v(" "), s("div", {
						staticClass: "form_show"
					}, [s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#old_password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.password,
							expression: "passwordInfo.password"
						}],
						staticClass: "pw",
						attrs: {
							type: "password",
							name: "old_password",
							id: "old_password",
							placeholder: "旧帐号密码（6-15 位英文及数字）",
							maxlength: "15"
						},
						domProps: {
							value: t.passwordInfo.password
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "password", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_old_password"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#new_password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.paypassword,
							expression: "passwordInfo.paypassword"
						}],
						staticClass: "pw",
						attrs: {
							type: "password",
							name: "new_password",
							id: "new_password",
							placeholder: "新帐号密码（6-15 位英文及数字）",
							maxlength: "15"
						},
						domProps: {
							value: t.passwordInfo.paypassword
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "paypassword", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_new_password"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#re_password"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.passwordInfo.newpasword,
							expression: "passwordInfo.newpasword"
						}],
						staticClass: "pw",
						attrs: {
							type: "password",
							name: "re_password",
							maxlength: "16",
							id: "re_password",
							placeholder: "再输入一次新帐号密码"
						},
						domProps: {
							value: t.passwordInfo.newpasword
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.passwordInfo, "newpasword", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "ico ico-eye_close"
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_re_password"
					})])]), t._v(" "), s("div", {
						staticClass: "button_area"
					}, [s("div", {
						staticClass: "confirm_btn"
					}, [s("button", {
						staticClass: "btn w-100",
						on: {
							click: function(a) {
								return t.editPassword(1)
							}
						}
					}, [t._v("保存")])]), t._v(" "), s("div", {
						staticClass: "cancel_btn",
						on: {
							click: t.clreaInfo
						}
					}, [s("a", [t._v("取消")])])])])])])]), t._v(" "), s("div", {
						staticClass: "alert_msg",
						attrs: {
							id: "set_withdrawal_pins"
						}
					}, [s("div", {
						staticClass: "alert_msg_pos"
					}, [s("div", {
						staticClass: "alert_msg_dialog"
					}, [t._m(10), t._v(" "), s("div", {
						staticClass: "alert_msg_body"
					}, [s("div", {
						staticClass: "msg_show"
					}), t._v(" "), s("div", {
						staticClass: "form_show"
					}, [s("div", {
						staticClass: "textbox_content mb-3 old_pin_div"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#old_pin"
						}
					}, [s("input", {
						staticClass: "pin",
						attrs: {
							type: "text",
							name: "old_pin",
							id: "old_pin",
							disabled: "",
							placeholder: "您的姓名"
						},
						domProps: {
							value: t.$store.state.userInfo.realname
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_old_pin"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#new_pin"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.info.mobile,
							expression: "info.mobile"
						}],
						staticClass: "pin",
						attrs: {
							type: "text",
							name: "new_pin",
							id: "new_pin",
							placeholder: "手机号码"
						},
						domProps: {
							value: t.info.mobile
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.info, "mobile", a.target.value)
							}
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_new_pin"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("div", {
						staticClass: "toggle_password",
						attrs: {
							toggle: "#re_pin"
						}
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.info.apply_info,
							expression: "info.apply_info"
						}],
						staticClass: "pin",
						attrs: {
							type: "text",
							name: "re_pin",
							id: "re_pin",
							placeholder: "申请理由"
						},
						domProps: {
							value: t.info.apply_info
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.info, "apply_info", a.target.value)
							}
						}
					})]), t._v(" "), s("div", {
						staticClass: "error_msg error_msg_re_pin"
					})])]), t._v(" "), s("div", {
						staticClass: "button_area"
					}, [s("div", {
						staticClass: "confirm_btn"
					}, [s("button", {
						staticClass: "btn w-100",
						on: {
							click: t.shenqing
						}
					}, [t._v("保存")])]), t._v(" "), s("div", {
						staticClass: "cancel_btn",
						on: {
							click: t.clreaInfo
						}
					}, [s("a", [t._v("取消")])])])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/record_bg.png"
							}
						}), a("img", {
							attrs: {
								alt: "",
								src: "/static/image/record_bg_a.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/bankcards_bg.png"
							}
						}), a("img", {
							attrs: {
								alt: "",
								src: "/static/image/bankcards_bg_a.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/pin_bg.png"
							}
						}), a("img", {
							attrs: {
								alt: "",
								src: "/image/popup_password_a.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/pin_bg.png"
							}
						}), a("img", {
							attrs: {
								alt: "",
								src: "/image/popup_password_a.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/inbox_bg.png"
							}
						}), a("img", {
							attrs: {
								alt: "",
								src: "/static/image/inbox_bg_a.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/pwd_bg.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "icon_circle_card"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/pin2_bg.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("hr")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "alert_msg_header"
						}, [a("div", {
							attrs: {
								id: "alert_title"
							}
						}, [this._v("取款密码")]), this._v(" "), a("div", [a("div", {
							attrs: {
								id: "alert_icon"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/popup_pin.png"
							}
						})])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "alert_msg_header"
						}, [a("div", {
							attrs: {
								id: "alert_title"
							}
						}, [this._v("帐号密码")]), this._v(" "), a("div", [a("div", {
							attrs: {
								id: "alert_icon"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/pin_bg.png"
							}
						})])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "alert_msg_header"
						}, [a("div", {
							attrs: {
								id: "alert_title"
							}
						}, [this._v("代理申请")]), this._v(" "), a("div", [a("div", {
							attrs: {
								id: "alert_icon"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/popup_pin.png"
							}
						})])])])
					}
				]
			};
		var et = s("VU/8")(at, st, !1, function(t) {
			s("3lD3")
		}, "data-v-7ecc8f95", null).exports,
			it = {
				name: "profile",
				data: function() {
					return {
						date: 1,
						page: 1,
						type: 1,
						api_type: "",
						showType: 1,
						stateType12: ["未定义", "待审核", "审核通过", "审核拒绝"],
						stateType34: ["失败", "成功", "待结算", "未定义"],
						transrecordList: [],
						transrecordListShowData: {},
						fanshuiList: [],
						fanshuishowData: {},
						betrecordList: [],
						betrecordShowData: {},
						activityApplyLogList: [],
						activityApplyLogShowData: {},
						jisuan: null,
						nojisuan: null,
						statuType: ["无效注单", "已结算", "未结算"],
						statuTypeS: ["0未约定", "待审核", "通过", "拒绝", "4未约定"],
						dogameLis: [],
						redpacketShowData: {},
						userredpacket: {},
						redpacketList: []
					}
				},
				created: function() {
					var t = this.$route.query;
					console.log(t), t.type && (this.showType = t.type), this.getdogame()
				},
				methods: {
					typeChang: function() {
						console.log(123), this.page = 1, this.getData()
					},
					getdogame: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/balancelist", {}).then(function(a) {
							200 == a.code && (t.dogameLis = a.data, t.getData())
						})
					},
					changPayType: function(t, a) {
						this[t] != a && (this[t] = a, "showType" == t && (this.page = 1), this.getData())
					},
					getData: function() {
						this.getTransrecord(), this.getfanshui(), this.getbetrecord(), this.getactivityApplyLogList(), this.getredpacket(), this.getuserredpacket()
					},
					getwelfare: function() {
						var t = this;
						t.userredpacket.sendnums < 1 ? t.$parent.showTost(0, "您的剩余次数不足！") : (t.$parent.showLoading(), t.$apiFun.post("/api/douserredpacket", {}).then(function(a) {
								console.log(a), t.$parent.showTost(0, a.message), t.$parent.hideLoading(), t.getredpacket(), t.getuserredpacket()
							}).
							catch (function() {
								t.$parent.showTost(0, "服务器异常，请稍后再试"), t.$parent.hideLoading()
							}))
					},
					getuserredpacket: function() {
						var t = this;
						t.$parent.showLoading();
						var a = {
							page: t.page
						};
						t.$apiFun.get("/api/userredpacket", a).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.userredpacket = a.data), t.$parent.hideLoading()
						})
					},
					getredpacket: function() {
						var t = this;
						t.$parent.showLoading();
						var a = {
							page: t.page
						};
						t.$apiFun.post("/api/redpacket", a).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.redpacketList = a.data.data, t.redpacketShowData = a.data), t.$parent.hideLoading()
						})
					},
					getTransrecord: function() {
						var t = this;
						t.$parent.showLoading();
						var a = {
							date: t.date,
							type: t.type,
							page: t.page,
							api_type: t.api_type
						};
						t.$apiFun.post("/api/gettransrecord", a).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.transrecordList = a.data.data, t.transrecordListShowData = a.data), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					getfanshui: function() {
						var t = this;
						t.$parent.showLoading();
						var a = {
							date: t.date,
							api_type: t.api_type,
							type: "",
							page: t.page
						};
						console.log(a), t.$apiFun.post("/api/getfanshui", a).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.fanshuiList = a.data.list.data, t.fanshuishowData = a.data.list, t.jisuan = a.data.jisuan, t.nojisuan = a.data.nojisuan), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					getbetrecord: function() {
						var t = this;
						t.$parent.showLoading();
						var a = {
							date: t.date,
							page: t.page,
							api_type: t.api_type
						};
						console.log(a), t.$apiFun.post("/api/betrecord", a).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.betrecordList = a.data.data, t.betrecordShowData = a.data), t.$parent.hideLoading()
						})
					},
					getactivityApplyLogList: function() {
						var t = this;
						t.$parent.showLoading();
						t.date, t.page, t.api_type;
						t.$apiFun.post("/api/activityApplyLog", {}).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.activityApplyLogList = a.data.data, t.activityApplyLogShowData = a.data), t.$parent.hideLoading()
						})
					},
					lingqu: function() {
						var t = this;
						t.nojisuan;
						t.$parent.showLoading(), t.$apiFun.post("/api/dofanshui", {}).then(function(a) {
							console.log(a), t.$parent.showTost(1, a.message), t.getfanshui(), t.$parent.getUserInfo(), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, nt = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "profile_body_container",
						attrs: {
							id: "recordhistory"
						}
					}, [s("div", {
						staticClass: "body_title"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("钱包记录")]), t._v(" "), s("div", {
						staticClass: "subtitle",
						attrs: {
							id: "record_history"
						}
					}, [s("div", {
						class: 1 == t.showType ? "active" : "",
						attrs: {
							"data-cta": "wallet_history_container",
							id: "wallet_history_container_tab"
						},
						on: {
							click: function(a) {
								return t.changPayType("showType", 1)
							}
						}
					}, [s("a", [t._v("交易记录")])]), t._v(" "), s("div", {
						class: 2 == t.showType ? "active" : "",
						attrs: {
							"data-cta": "promo_history_container",
							id: "promo_history_container_tab"
						},
						on: {
							click: function(a) {
								return t.changPayType("showType", 2)
							}
						}
					}, [s("a", [t._v("返水记录")])]), t._v(" "), s("div", {
						class: 3 == t.showType ? "active" : "",
						attrs: {
							"data-cta": "bet_history_container",
							id: "bet_history_container_tab"
						},
						on: {
							click: function(a) {
								return t.changPayType("showType", 3)
							}
						}
					}, [s("a", [t._v("投注记录")])]), t._v(" "), s("div", {
						class: 5 == t.showType ? "active" : "",
						attrs: {
							"data-cta": "bet_history_container",
							id: "bet_history_container_tab"
						},
						on: {
							click: function(a) {
								return t.changPayType("showType", 5)
							}
						}
					}, [s("a", [t._v("红包记录")])]), t._v(" "), s("div", {
						class: 4 == t.showType ? "active" : "",
						attrs: {
							"data-cta": "bet_history_container",
							id: "bet_history_container_tab"
						},
						on: {
							click: function(a) {
								return t.changPayType("showType", 4)
							}
						}
					}, [s("a", [t._v("活动申请记录")])])])]), t._v(" "), s("div", {
						staticClass: "profile_body_content"
					}, [1 == t.showType ? s("div", {
						staticClass: "record_history_container",
						attrs: {
							id: "wallet_history_container"
						}
					}, [s("div", {
						staticClass: "wallet_history_filter_container"
					}, [s("div", {
						staticClass: "record_history_title",
						staticStyle: {
							flex: "1"
						}
					}, [t._v("交易记录")]), t._v(" "), s("div", [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.api_type,
							expression: "api_type"
						}],
						staticStyle: {
							width: "145px",
							height: "38px"
						},
						on: {
							change: [
								function(a) {
									var s = Array.prototype.filter.call(a.target.options, function(t) {
										return t.selected
									}).map(function(t) {
										return "_value" in t ? t._value : t.value
									});
									t.api_type = a.target.multiple ? s : s[0]
								},
								t.typeChang
							]
						}
					}, [s("option", {
						domProps: {
							value: ""
						}
					}, [t._v("全平台")]), t._v(" "), t._l(t.dogameLis, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.platname
							}
						}, [t._v(t._s(a.name))])
					})], 2)]), t._v(" "), s("div", [s("div", {
						class: 1 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "yesterday"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 1)
							}
						}
					}, [t._v("今日")]), t._v(" "), s("div", {
						class: 2 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "today"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 2)
							}
						}
					}, [t._v("一周内")]), t._v(" "), s("div", {
						class: 3 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "week"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 3)
							}
						}
					}, [t._v("半月内")]), t._v(" "), s("div", {
						class: 4 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "month"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 4)
							}
						}
					}, [t._v("一月内")])])]), t._v(" "), s("div", {
						staticClass: "profile_tab_container bet_history_inner_container"
					}, [s("div", {
						staticClass: "record_history_btn wallet_btn"
					}, [s("div", {
						class: 1 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changPayType("type", 1)
							}
						}
					}, [t._v("存款")]), t._v(" "), s("div", {
						class: 2 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changPayType("type", 2)
							}
						}
					}, [t._v("取款")]), t._v(" "), s("div", {
						class: 3 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changPayType("type", 3)
							}
						}
					}, [t._v("转入")]), t._v(" "), s("div", {
						class: 4 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changPayType("type", 4)
							}
						}
					}, [t._v("转出")])]), t._v(" "), s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_deposit"
						}
					}, [s("table", [s("thead", [s("tr", {
						attrs: {
							id: "deposit_history_header"
						}
					}, [s("td", {
						staticClass: "center"
					}, [t._v("序号")]), t._v(" "), s("td", {
						staticClass: "left"
					}, [t._v("时间")]), t._v(" "), 1 == t.type || 2 == t.type ? s("td", {
						staticClass: "left"
					}, [t._v("订单号")]) : t._e(), t._v(" "), s("td", {
						staticClass: "right"
					}, [t._v("交易类型")]), t._v(" "), s("td", {
						staticClass: "right"
					}, [t._v("金额")]), t._v(" "), s("td", {
						staticClass: "left"
					}, [t._v("状态")])])]), t._v(" "), s("tbody", {
						attrs: {
							id: "deposit_history_list"
						}
					}, t._l(t.transrecordList, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", [t._v("\n                  " + t._s(e + 1) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left trans_container"
						}, [t._v("\n                  " + t._s(a.created_at) + "\n                ")]), t._v(" "), 1 == t.type || 2 == t.type ? s("td", {
							staticClass: "left"
						}, [s("div", [t._v(t._s(a.out_trade_no))])]) : t._e(), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.pay_way))]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.amount))]), t._v(" "), 1 == t.type || 2 == t.type ? s("td", {
							staticClass: "left"
						}, [s("div", {
							staticClass: "status_tag process"
						}, [t._v(t._s(t.stateType12[a.state]))])]) : t._e(), t._v(" "), 3 == t.type || 4 == t.type ? s("td", {
							staticClass: "left"
						}, [s("div", {
							staticClass: "status_tag process"
						}, [t._v(t._s(t.stateType34[a.state]))])]) : t._e()])
					}), 0)])]), t._v(" "), 0 == t.transrecordList.length ? s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_withdrawal"
						}
					}, [t._m(0)]) : t._e()]), t._v(" "), t.transrecordListShowData.total ? s("el-pagination", {
						staticStyle: {
							"margin-top": "30px",
							"margin-left": "30px"
						},
						attrs: {
							"current-page": t.page,
							"page-size": 10,
							layout: "prev, pager, next",
							total: t.transrecordListShowData.total
						},
						on: {
							"current-change": t.getTransrecord,
							"update:currentPage": function(a) {
								t.page = a
							},
							"update:current-page": function(a) {
								t.page = a
							}
						}
					}) : t._e()], 1) : t._e(), t._v(" "), 2 == t.showType ? s("div", {
						staticClass: "record_history_container",
						attrs: {
							id: "wallet_history_container"
						}
					}, [s("div", {
						staticClass: "wallet_history_filter_container"
					}, [s("div", {
						staticClass: "record_history_title",
						staticStyle: {
							flex: "1"
						}
					}, [t._v("返水记录")]), t._v(" "), s("div", [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.api_type,
							expression: "api_type"
						}],
						staticStyle: {
							width: "145px",
							height: "38px"
						},
						on: {
							change: [
								function(a) {
									var s = Array.prototype.filter.call(a.target.options, function(t) {
										return t.selected
									}).map(function(t) {
										return "_value" in t ? t._value : t.value
									});
									t.api_type = a.target.multiple ? s : s[0]
								},
								t.typeChang
							]
						}
					}, [s("option", {
						domProps: {
							value: ""
						}
					}, [t._v("全平台")]), t._v(" "), t._l(t.dogameLis, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.platname
							}
						}, [t._v(t._s(a.name))])
					})], 2)]), t._v(" "), s("div", [s("div", {
						class: 1 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "yesterday"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 1)
							}
						}
					}, [t._v("今日")]), t._v(" "), s("div", {
						class: 2 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "today"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 2)
							}
						}
					}, [t._v("一周内")]), t._v(" "), s("div", {
						class: 3 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "week"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 3)
							}
						}
					}, [t._v("半月内")]), t._v(" "), s("div", {
						class: 4 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "month"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 4)
							}
						}
					}, [t._v("一月内")])])]), t._v(" "), s("div", {
						staticClass: "profile_tab_container bet_history_inner_container"
					}, [s("div", {
						staticClass: "record_history_btn wallet_btn"
					}, [s("div", [t._v("累计领取 " + t._s(t.jisuan))]), t._v(" "), s("div", {
						on: {
							click: t.lingqu
						}
					}, [t._v("待领取 " + t._s(t.nojisuan) + " "), t.nojisuan ? s("span", [t._v("(点击领取)")]) : t._e()])]), t._v(" "), s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_deposit"
						}
					}, [s("table", [t._m(1), t._v(" "), s("tbody", {
						attrs: {
							id: "deposit_history_list"
						}
					}, t._l(t.fanshuiList, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", [t._v("\n                  " + t._s(a.gamename) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left trans_container"
						}, [t._v("\n                  " + t._s(a.money) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(0 == a.state ? "待领取" : "已领取"))]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.created_at))]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("\n                  " + t._s(0 == a.state ? "暂未领取" : a.updated_at) + "\n                ")])])
					}), 0)])]), t._v(" "), 0 == t.fanshuiList.length ? s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_withdrawal"
						}
					}, [t._m(2)]) : t._e()]), t._v(" "), t.fanshuishowData.total ? s("el-pagination", {
						staticStyle: {
							"margin-top": "30px",
							"margin-left": "30px"
						},
						attrs: {
							"current-page": t.page,
							"page-size": 10,
							layout: "prev, pager, next",
							total: t.fanshuishowData.total
						},
						on: {
							"current-change": t.getfanshui,
							"update:currentPage": function(a) {
								t.page = a
							},
							"update:current-page": function(a) {
								t.page = a
							}
						}
					}) : t._e()], 1) : t._e(), t._v(" "), 3 == t.showType ? s("div", {
						staticClass: "record_history_container",
						attrs: {
							id: "wallet_history_container"
						}
					}, [s("div", {
						staticClass: "wallet_history_filter_container"
					}, [s("div", {
						staticClass: "record_history_title",
						staticStyle: {
							flex: "1"
						}
					}, [t._v("投注记录")]), t._v(" "), s("div", [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.api_type,
							expression: "api_type"
						}],
						staticStyle: {
							width: "145px",
							height: "38px"
						},
						on: {
							change: [
								function(a) {
									var s = Array.prototype.filter.call(a.target.options, function(t) {
										return t.selected
									}).map(function(t) {
										return "_value" in t ? t._value : t.value
									});
									t.api_type = a.target.multiple ? s : s[0]
								},
								t.typeChang
							]
						}
					}, [s("option", {
						domProps: {
							value: ""
						}
					}, [t._v("全平台")]), t._v(" "), t._l(t.dogameLis, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.platname
							}
						}, [t._v(t._s(a.name))])
					})], 2)]), t._v(" "), s("div", [s("div", {
						class: 1 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "yesterday"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 1)
							}
						}
					}, [t._v("今日")]), t._v(" "), s("div", {
						class: 2 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "today"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 2)
							}
						}
					}, [t._v("一周内")]), t._v(" "), s("div", {
						class: 3 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "week"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 3)
							}
						}
					}, [t._v("半月内")]), t._v(" "), s("div", {
						class: 4 == t.date ? "wallethistory_filter_btn active" : "wallethistory_filter_btn",
						attrs: {
							"data-value": "month"
						},
						on: {
							click: function(a) {
								return t.changPayType("date", 4)
							}
						}
					}, [t._v("一月内")])])]), t._v(" "), s("div", {
						staticClass: "profile_tab_container bet_history_inner_container"
					}, [s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_deposit"
						}
					}, [s("table", [t._m(3), t._v(" "), s("tbody", {
						attrs: {
							id: "deposit_history_list"
						}
					}, t._l(t.betrecordList, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", [t._v("\n                  " + t._s(e + 1) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left trans_container"
						}, [t._v("\n                  " + t._s(a.bet_time) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [s("div", [t._v(t._s(a.bet_id))])]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.Code))]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.bet_amount))]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.win_loss))]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("\n                  " + t._s(t.statuType[a.status]) + "\n                ")])])
					}), 0)])]), t._v(" "), 0 == t.betrecordList.length ? s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_withdrawal"
						}
					}, [t._m(4)]) : t._e()]), t._v(" "), t.betrecordShowData.total ? s("el-pagination", {
						staticStyle: {
							"margin-top": "30px",
							"margin-left": "30px"
						},
						attrs: {
							"current-page": t.page,
							"page-size": 10,
							layout: "prev, pager, next",
							total: t.betrecordShowData.total
						},
						on: {
							"current-change": t.getbetrecord,
							"update:currentPage": function(a) {
								t.page = a
							},
							"update:current-page": function(a) {
								t.page = a
							}
						}
					}) : t._e()], 1) : t._e(), t._v(" "), 4 == t.showType ? s("div", {
						staticClass: "record_history_container",
						attrs: {
							id: "wallet_history_container"
						}
					}, [t._m(5), t._v(" "), s("div", {
						staticClass: "profile_tab_container bet_history_inner_container"
					}, [s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_deposit"
						}
					}, [s("table", [t._m(6), t._v(" "), s("tbody", {
						attrs: {
							id: "deposit_history_list"
						}
					}, t._l(t.activityApplyLogList, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", {
							staticClass: "left"
						}, [t._v("\n                  " + t._s(a.activity_name) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [s("div", [t._v(t._s(a.created_at))])]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("\n                  " + t._s(t.statuTypeS[a.state]) + "\n                ")])])
					}), 0)])]), t._v(" "), 0 == t.activityApplyLogList.length ? s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_withdrawal"
						}
					}, [t._m(7)]) : t._e()]), t._v(" "), t.activityApplyLogShowData.total ? s("el-pagination", {
						staticStyle: {
							"margin-top": "30px",
							"margin-left": "30px"
						},
						attrs: {
							"current-page": t.page,
							"page-size": 10,
							layout: "prev, pager, next",
							total: t.activityApplyLogShowData.total
						},
						on: {
							"current-change": t.getactivityApplyLogList,
							"update:currentPage": function(a) {
								t.page = a
							},
							"update:current-page": function(a) {
								t.page = a
							}
						}
					}) : t._e()], 1) : t._e(), t._v(" "), 5 == t.showType ? s("div", {
						staticClass: "record_history_container",
						attrs: {
							id: "wallet_history_container"
						}
					}, [t._m(8), t._v(" "), s("div", {
						staticClass: "profile_tab_container bet_history_inner_container"
					}, [s("div", {
						staticClass: "record_history_btn wallet_btn"
					}, [s("div", [t._v("累计领取次数 " + t._s(t.userredpacket.acquirednum))]), t._v(" "), s("div", {
						on: {
							click: function(a) {
								return t.$parent.goNav("/userredpackets")
							}
						}
					}, [t._v("剩余领取次数 " + t._s(t.userredpacket.sendnums) + " "), s("span", [t._v("(抢红包)")])])]), t._v(" "), s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_deposit"
						}
					}, [s("table", [t._m(9), t._v(" "), s("tbody", {
						attrs: {
							id: "deposit_history_list"
						}
					}, t._l(t.redpacketList, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", [t._v("\n                  " + t._s(a.money) + "\n                ")]), t._v(" "), s("td", [t._v("\n                  " + t._s(a.redpacketmoney) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "left trans_container"
						}, [t._v("\n                  " + t._s(a.created_at) + "\n                ")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v(t._s(a.created_at))]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("\n                  " + t._s(a.usetime) + "\n                ")])])
					}), 0)])]), t._v(" "), 0 == t.redpacketList.length ? s("div", {
						staticClass: "record_history_tbl wallet_tbl",
						attrs: {
							id: "wallet_withdrawal"
						}
					}, [t._m(10)]) : t._e()]), t._v(" "), t.redpacketShowData.total ? s("el-pagination", {
						staticStyle: {
							"margin-top": "30px",
							"margin-left": "30px"
						},
						attrs: {
							"current-page": t.page,
							"page-size": 10,
							layout: "prev, pager, next",
							total: t.redpacketShowData.total
						},
						on: {
							"current-change": t.getredpacket,
							"update:currentPage": function(a) {
								t.page = a
							},
							"update:current-page": function(a) {
								t.page = a
							}
						}
					}) : t._e()], 1) : t._e()])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "no_data",
							staticStyle: {
								width: "200px",
								"text-align": "center",
								position: "relative",
								left: "50%",
								"margin-top": "10%"
							}
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_emptybox.png",
								width: "100%"
							}
						}), this._v(" "), a("div", [this._v("暂无资料")])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("thead", [s("tr", {
							attrs: {
								id: "deposit_history_header"
							}
						}, [s("td", {
							staticClass: "center"
						}, [t._v("游戏名称")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("返水金额")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v("状态")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v("返水时间")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("领取时间")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "no_data",
							staticStyle: {
								width: "200px",
								"text-align": "center",
								position: "relative",
								left: "50%",
								"margin-top": "10%"
							}
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_emptybox.png",
								width: "100%"
							}
						}), this._v(" "), a("div", [this._v("暂无资料")])])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("thead", [s("tr", {
							attrs: {
								id: "deposit_history_header"
							}
						}, [s("td", {
							staticClass: "center"
						}, [t._v("序号")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("时间")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("订单号")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v("游戏名称")]), t._v(" "), s("td", {
							staticClass: "right"
						}, [t._v("金额")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("派彩")]), t._v(" "), s("td", {
							staticClass: "left"
						}, [t._v("状态")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "no_data",
							staticStyle: {
								width: "200px",
								"text-align": "center",
								position: "relative",
								left: "50%",
								"margin-top": "10%"
							}
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_emptybox.png",
								width: "100%"
							}
						}), this._v(" "), a("div", [this._v("暂无资料")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_history_filter_container"
						}, [a("div", {
							staticClass: "record_history_title"
						}, [this._v("活动申请记录")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("thead", [a("tr", {
							attrs: {
								id: "deposit_history_header"
							}
						}, [a("td", {
							staticClass: "left"
						}, [this._v("活动标题")]), this._v(" "), a("td", {
							staticClass: "left"
						}, [this._v("申请时间")]), this._v(" "), a("td", {
							staticClass: "left"
						}, [this._v("状态")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "no_data",
							staticStyle: {
								width: "200px",
								"text-align": "center",
								position: "relative",
								left: "50%",
								"margin-top": "10%"
							}
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_emptybox.png",
								width: "100%"
							}
						}), this._v(" "), a("div", [this._v("暂无资料")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "wallet_history_filter_container"
						}, [a("div", {
							staticClass: "record_history_title",
							staticStyle: {
								flex: "1"
							}
						}, [this._v("红包记录")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("thead", [a("tr", {
							attrs: {
								id: "deposit_history_header"
							}
						}, [a("td", {
							staticClass: "center"
						}, [this._v("充值金额")]), this._v(" "), a("td", {
							staticClass: "left"
						}, [this._v("红包金额")]), this._v(" "), a("td", {
							staticClass: "right"
						}, [this._v("充值时间")]), this._v(" "), a("td", {
							staticClass: "right"
						}, [this._v("领取时间")])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "no_data",
							staticStyle: {
								width: "200px",
								"text-align": "center",
								position: "relative",
								left: "50%",
								"margin-top": "10%"
							}
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/img_emptybox.png",
								width: "100%"
							}
						}), this._v(" "), a("div", [this._v("暂无资料")])])
					}
				]
			};
		var ot = s("VU/8")(it, nt, !1, function(t) {
			s("+Gm1")
		}, "data-v-06d70a88", null).exports,
			rt = {
				name: "bankCard",
				data: function() {
					return {
						baseURL: "",
						bankcardLis: [],
						usdtCarList: [],
						cardInfo: {
							bank: null
						},
						banklist: [],
						usdtInfo: {
							bank_owner: "ERC20"
						}
					}
				},
				created: function() {
					this.baseURL = sessionStorage.getItem("baseURL") || "", console.log(sessionStorage.getItem("baseURL")), this.getBanklist(), this.getcard(), this.getcard1()
				},
				methods: {
					getBanklist: function() {
						var t = this;
						t.$apiFun.post("/api/banklist", {}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.banklist = a.data)
						})
					},
					clreaInfo: function() {
						this.passwordInfo = {}, this.cardInfo = {
							bank: null
						};
						var t = this.usdtInfo.bank_owner;
						this.usdtInfo = {
							bank_owner: t
						}, this.info = {}, setTimeout(function() {
							$(".alert_msg").removeClass("active"), $(".alert_msg").removeClass("delay")
						}, 1500)
					},
					bindUsdss: function() {
						var t = this,
							a = t.usdtInfo;
						a.bank = "USDT", null != a.bank_no && "" != a.bank_no ? a.bank_owner || null == a.bank_owner ? a.pay_pass ? (t.$parent.showLoading(), t.$apiFun.post("/api/bindcard", a).then(function(a) {
								200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.$parent.showTost(1, a.message), t.getcard(), t.getcard1(), t.clreaInfo(), t.$parent.shuaCar()), t.$parent.hideLoading()
							}).
							catch (function(a) {
								t.$parent.hideLoading()
							})) : t.$parent.showTost(0, "请输入支付密码") : t.$parent.showTost(0, "请选择钱包协议") : t.$parent.showTost(0, "请输入USDT地址")
					},
					bindCard: function() {
						var t = this;
						t.cardInfo.bank_owner ? t.cardInfo.bank ? t.cardInfo.bank_address ? t.cardInfo.bank_no ? t.cardInfo.pay_pass ? t.cardInfo.bank_no.length < 8 ? t.$parent.showTost(0, "请输入正确的卡号长度") : t.cardInfo.pay_pass.length < 6 || t.cardInfo.pay_pass.length > 18 ? t.$parent.showTost(0, "请输入支付密码长度") : (t.$parent.showLoading(), t.$apiFun.post("/api/bindcard", t.cardInfo).then(function(a) {
								200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && t.$parent.showTost(1, "绑定成功"), t.getcard(), t.getcard1(), t.clreaInfo(), t.$parent.shuaCar(), t.$parent.hideLoading()
							}).
							catch (function(a) {
								t.$parent.hideLoading()
							})) : t.$parent.showTost(0, "请输入支付密码") : t.$parent.showTost(0, "请输入银行卡号") : t.$parent.showTost(0, "请输入开户行地址") : t.$parent.showTost(0, "请输入银行") : t.$parent.showTost(0, "请输入姓名")
					},
					add_bankcard: function() {
						$("#add_bankcard").addClass("active").addClass("delay")
					},
					add_bankcards: function() {
						$("#add_bankcards").addClass("active").addClass("delay")
					},
					delShow: function(t, a) {
						var s = this;
						this.$confirm("确定要对" + a + "进行解绑吗？", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning"
						}).then(function() {
							s.$parent.showLoading(), s.$apiFun.post("/api/delcard", {
								id: t
							}).then(function(t) {
								200 != t.code && s.$parent.showTost(0, t.message), s.$parent.hideLoading(), 200 == t.code && (s.$parent.showTost(1, "解绑成功"), s.showAfter = {
									show: !1
								}, s.getcard(), s.getcard1(), s.$parent.shuaCar())
							})
						}).
						catch (function() {})
					},
					getcard: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/getcard", {
							type: 1
						}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.bankcardLis = a.data), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					},
					getcard1: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/getcard", {
							type: 2
						}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.usdtCarList = a.data), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, ct = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "profile_body_container",
						attrs: {
							id: "mybankcard"
						}
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "profile_body_content"
					}, [s("div", {
						staticClass: "bankcard_container",
						attrs: {
							id: "bankcard_container"
						}
					}, [s("label", {
						staticClass: "hints"
					}, [t._v("温馨提示：每个账户仅能绑定最多 5 张银行卡！一经绑定、不可随意修改，如需修改资料，请联系 24 小时在线客服为您服务！")]), t._v(" "), s("div", {
						staticClass: "bankcard_section_description"
					}, [s("div", [t._v("银行卡")]), t._v(" "), s("div", [t._v(t._s(t.bankcardLis.length) + "/5")])]), t._v(" "), s("div", {
						staticClass: "bankcard_list"
					}, [t._l(t.bankcardLis, function(a, e) {
						return s("div", {
							key: e,
							staticClass: "mediv"
						}, [s("div", {
							staticClass: "bankcard_card_container"
						}, [s("div", {
							staticClass: "logo"
						}, [s("img", {
							attrs: {
								alt: "",
								src: a.ico
							}
						})]), t._v(" "), s("div", {
							staticClass: "detail"
						}, [s("div", {
							staticClass: "bank_name"
						}, [t._v(t._s(a.bank))]), t._v(" "), s("div", {
							staticClass: "bank_name"
						}, [t._v(t._s(a.bank_no))])]), t._v(" "), s("div", {
							staticClass: "main bankcard_to_main",
							attrs: {
								"data-maincard": "0"
							},
							on: {
								click: function(s) {
									return t.delShow(a.id, a.bank_no)
								}
							}
						}, [t._v("解绑")])])])
					}), t._v(" "), t.bankcardLis.length < 5 ? s("div", {
						staticClass: "mediv"
					}, [s("div", {
						staticClass: "bankcard_card_container"
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "detail"
					}, [s("button", {
						staticClass: "btn_major add_bankcard",
						attrs: {
							"data-redirect": "profile"
						},
						on: {
							click: t.add_bankcard
						}
					}, [t._v("添加银行卡")])])])]) : t._e()], 2), t._v(" "), s("div", {
						staticClass: "bankcard_section_description"
					}, [s("div", [t._v("电子钱包")]), t._v(" "), s("div", [t._v(t._s(t.usdtCarList.length) + "/5")])]), t._v(" "), s("div", {
						staticClass: "bankcard_list"
					}, [t._l(t.usdtCarList, function(a, e) {
						return s("div", {
							key: e,
							staticClass: "mediv"
						}, [s("div", {
							staticClass: "bankcard_card_container"
						}, [s("div", {
							staticClass: "detail detail_without_logo"
						}, [s("div", {
							staticClass: "bank_name"
						}, [t._v(t._s(a.bank_no))]), t._v(" "), s("div", {
							staticClass: "bank_name"
						}, [t._v(t._s(a.bank_owner))])]), t._v(" "), s("div", {
							staticClass: "main bankcard_to_main",
							attrs: {
								"data-maincard": "0"
							},
							on: {
								click: function(s) {
									return t.delShow(a.id, a.bank_no)
								}
							}
						}, [t._v("解绑")])])])
					}), t._v(" "), t.usdtCarList.length < 5 ? s("div", {
						staticClass: "mediv"
					}, [s("div", {
						staticClass: "bankcard_card_container"
					}, [t._m(2), t._v(" "), s("div", {
						staticClass: "detail"
					}, [s("button", {
						staticClass: "btn_major add_bankcard add_crypto_wallet_btn",
						attrs: {
							"data-redirect": "profile"
						},
						on: {
							click: t.add_bankcards
						}
					}, [t._v("添加电子钱包")])])])]) : t._e()], 2)])]), t._v(" "), s("div", {
						staticClass: "alert_msg ",
						attrs: {
							id: "add_bankcard"
						}
					}, [s("div", {
						staticClass: "alert_msg_pos"
					}, [s("div", {
						staticClass: "alert_msg_dialog"
					}, [t._m(3), t._v(" "), s("div", {
						staticClass: "alert_msg_body"
					}, [s("div", {
						staticClass: "msg_show"
					}), t._v(" "), s("div", {
						staticClass: "form_show"
					}, [s("div", {
						staticStyle: {
							"font-size": "12px",
							color: "#9a9a9a",
							"margin-bottom": "16px"
						}
					}, [t._v("温馨提示：姓名及手机号码填写立即绑定。一经绑定、不可随意修改，如需修改资料，请联系 24 小时在线客服为您服务！")]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.cardInfo.bank_owner,
							expression: "cardInfo.bank_owner"
						}],
						staticClass: "fn",
						attrs: {
							type: "text",
							placeholder: "请输入真实姓名"
						},
						domProps: {
							value: t.cardInfo.bank_owner
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.cardInfo, "bank_owner", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.cardInfo.bank,
							expression: "cardInfo.bank"
						}],
						staticClass: "fn",
						attrs: {
							name: "",
							id: ""
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.$set(t.cardInfo, "bank", a.target.multiple ? s : s[0])
							}
						}
					}, [s("option", {
						attrs: {
							disabled: "",
							selected: ""
						},
						domProps: {
							value: null
						}
					}, [t._v("请选择银行")]), t._v(" "), t._l(t.banklist, function(a, e) {
						return s("option", {
							key: e,
							domProps: {
								value: a.id
							}
						}, [t._v(t._s(a.bank_name))])
					})], 2), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.cardInfo.bank_address,
							expression: "cardInfo.bank_address"
						}],
						staticClass: "fn",
						attrs: {
							type: "text",
							placeholder: "请输入开户行"
						},
						domProps: {
							value: t.cardInfo.bank_address
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.cardInfo, "bank_address", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.cardInfo.bank_no,
							expression: "cardInfo.bank_no"
						}],
						staticClass: "fn",
						attrs: {
							type: "text",
							placeholder: "请输入银行卡号"
						},
						domProps: {
							value: t.cardInfo.bank_no
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.cardInfo, "bank_no", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.cardInfo.pay_pass,
							expression: "cardInfo.pay_pass"
						}],
						staticClass: "fn",
						attrs: {
							type: "password",
							placeholder: "请输入支付密码"
						},
						domProps: {
							value: t.cardInfo.pay_pass
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.cardInfo, "pay_pass", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})])]), t._v(" "), s("div", {
						staticClass: "button_area"
					}, [s("div", {
						staticClass: "confirm_btn"
					}, [s("button", {
						staticClass: "btn w-100",
						on: {
							click: t.bindCard
						}
					}, [t._v("添加银行卡")])]), t._v(" "), s("div", {
						staticClass: "cancel_btn",
						on: {
							click: t.clreaInfo
						}
					}, [s("a", [t._v("取消")])])])])])])]), t._v(" "), s("div", {
						staticClass: "alert_msg ",
						attrs: {
							id: "add_bankcards"
						}
					}, [s("div", {
						staticClass: "alert_msg_pos"
					}, [s("div", {
						staticClass: "alert_msg_dialog"
					}, [t._m(4), t._v(" "), s("div", {
						staticClass: "alert_msg_body"
					}, [s("div", {
						staticClass: "msg_show"
					}), t._v(" "), s("div", {
						staticClass: "form_show"
					}, [s("div", {
						staticStyle: {
							"font-size": "12px",
							color: "#9a9a9a",
							"margin-bottom": "16px"
						}
					}, [t._v("温馨提示：信息填写立即绑定。一经绑定、不可随意修改，如需修改资料，请联系 24 小时在线客服为您服务！")]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.usdtInfo.bank_no,
							expression: "usdtInfo.bank_no"
						}],
						staticClass: "fn",
						attrs: {
							type: "text",
							placeholder: "请输入USDT地址"
						},
						domProps: {
							value: t.usdtInfo.bank_no
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.usdtInfo, "bank_no", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.usdtInfo.bank_owner,
							expression: "usdtInfo.bank_owner"
						}],
						staticClass: "fn",
						attrs: {
							name: "",
							id: ""
						},
						on: {
							change: function(a) {
								var s = Array.prototype.filter.call(a.target.options, function(t) {
									return t.selected
								}).map(function(t) {
									return "_value" in t ? t._value : t.value
								});
								t.$set(t.usdtInfo, "bank_owner", a.target.multiple ? s : s[0])
							}
						}
					}, [s("option", {
						attrs: {
							disabled: "",
							selected: ""
						},
						domProps: {
							value: null
						}
					}, [t._v("请选择钱包协议")]), t._v(" "), s("option", {
						attrs: {
							value: "ERC20"
						}
					}, [t._v("ERC20")]), t._v(" "), s("option", {
						attrs: {
							value: "TRC20"
						}
					}, [t._v("TRC20")])]), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})]), t._v(" "), s("div", {
						staticClass: "textbox_content mb-3"
					}, [s("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.usdtInfo.pay_pass,
							expression: "usdtInfo.pay_pass"
						}],
						staticClass: "fn",
						attrs: {
							type: "password",
							placeholder: "请输入支付密码"
						},
						domProps: {
							value: t.usdtInfo.pay_pass
						},
						on: {
							input: function(a) {
								a.target.composing || t.$set(t.usdtInfo, "pay_pass", a.target.value)
							}
						}
					}), t._v(" "), s("div", {
						staticClass: "error_msg bank_account_name_error"
					})])]), t._v(" "), s("div", {
						staticClass: "button_area"
					}, [s("div", {
						staticClass: "confirm_btn"
					}, [s("button", {
						staticClass: "btn w-100",
						on: {
							click: t.bindUsdss
						}
					}, [t._v("绑定USDT地址")])]), t._v(" "), s("div", {
						staticClass: "cancel_btn",
						on: {
							click: t.clreaInfo
						}
					}, [s("a", [t._v("取消")])])])])])])])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "body_title"
						}, [a("div", {
							staticClass: "title"
						}, [this._v("银行卡管理")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "logo"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/profile/img_bankcardpic.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "logo"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "https://7148ssss.com/web/templateimage/profile/img_bankcardpic.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "alert_msg_header"
						}, [a("div", {
							attrs: {
								id: "alert_title"
							}
						}, [this._v("添加银行卡")]), this._v(" "), a("div", [a("div", {
							attrs: {
								id: "alert_icon"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/addbankcard_bg.png"
							}
						})])])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "alert_msg_header"
						}, [a("div", {
							attrs: {
								id: "alert_title"
							}
						}, [this._v("绑定USDT地址")]), this._v(" "), a("div", [a("div", {
							attrs: {
								id: "alert_icon"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/addbankcard_bg.png"
							}
						})])])])
					}
				]
			};
		var lt = s("VU/8")(rt, ct, !1, function(t) {
			s("Pe34")
		}, "data-v-5a118fd1", null).exports,
			_t = {
				name: "message",
				data: function() {
					return {
						type: 0,
						noticeList: [],
						homenoticelis: [],
						noticeInfo: {},
						hInfo: {}
					}
				},
				created: function() {
					var t = this.$route.query;
					t.type && (this.type = 1 * t.type), this.$parent.showLoading(), this.homenotice(), this.getDatalist()
				},
				methods: {
					changInfo: function(t) {
						this.noticeInfo = t
					},
					changInfos: function(t) {
						this.hInfo = t
					},
					changType: function(t) {
						this.type != t && (this.type = t, this.hInfo = this.homenoticelis[0], this.noticeInfo = this.noticeList[0])
					},
					homenotice: function() {
						var t = this;
						t.$apiFun.post("/api/homenotice", {}).then(function(a) {
							console.log(a), 200 != a.code && t.showTost(0, a.message), 200 == a.code && (t.homenoticelis = a.data, t.hInfo = t.homenoticelis[0])
						})
					},
					getDatalist: function() {
						var t = this,
							a = t.page;
						t.$apiFun.post("/api/noticeList", {
							page: a
						}).then(function(a) {
							200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.noticeList = a.data.data, t.noticeInfo = t.noticeList[0]), t.$parent.hideLoading()
						}).
						catch (function(a) {
							t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, dt = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "profile_body_container",
						attrs: {
							id: "mymessage"
						}
					}, [s("div", {
						staticClass: "body_title"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("我的信息")]), t._v(" "), s("div", {
						staticClass: "subtitle",
						attrs: {
							id: "message_announcement"
						}
					}, [s("div", {
						class: 0 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changType(0)
							}
						}
					}, [t._v("站内信")]), t._v(" "), s("div", {
						class: 1 == t.type ? "active" : "",
						on: {
							click: function(a) {
								return t.changType(1)
							}
						}
					}, [t._v("公告")])])]), t._v(" "), s("div", {
						staticClass: "profile_body_content"
					}, [0 == t.type ? s("div", {
						staticClass: "message_container",
						attrs: {
							id: "message_container"
						}
					}, [s("ul", {
						staticClass: "message_listing"
					}, t._l(t.noticeList, function(a, e) {
						return s("li", {
							key: e,
							on: {
								click: function(s) {
									return t.changInfo(a)
								}
							}
						}, [s("div", {
							staticClass: "message_item"
						}, [s("div", {
							staticClass: "title"
						}, [t._v(t._s(a.title))]), t._v(" "), s("div", {
							staticClass: "date"
						}, [t._v(t._s(a.created_at))]), t._v(" "), s("div", {
							staticClass: "arrow"
						})])])
					}), 0), t._v(" "), s("div", {
						staticClass: "message_display"
					}, [s("div", {
						staticClass: "date"
					}, [t._v(t._s(t.noticeInfo.created_at))]), t._v(" "), s("div", {
						staticClass: "title"
					}, [t._v(t._s(t.noticeInfo.title))]), t._v(" "), s("div", {
						staticClass: "content",
						domProps: {
							innerHTML: t._s(t.noticeInfo.content)
						}
					})])]) : t._e(), t._v(" "), 1 == t.type ? s("div", {
						staticClass: "message_container",
						attrs: {
							id: "message_container"
						}
					}, [s("ul", {
						staticClass: "message_listing"
					}, t._l(t.homenoticelis, function(a, e) {
						return s("li", {
							key: e,
							on: {
								click: function(s) {
									return t.changInfos(a)
								}
							}
						}, [s("div", {
							staticClass: "message_item"
						}, [s("div", {
							staticClass: "title"
						}, [t._v(t._s(a))]), t._v(" "), s("div", {
							staticClass: "arrow"
						})])])
					}), 0), t._v(" "), s("div", {
						staticClass: "message_display"
					}, [s("div", {
						staticClass: "content",
						domProps: {
							innerHTML: t._s(t.hInfo)
						}
					})])]) : t._e()])])
				},
				staticRenderFns: []
			};
		var vt = s("VU/8")(_t, dt, !1, function(t) {
			s("l8b/")
		}, "data-v-4e02981f", null).exports,
			pt = {
				name: "app",
				data: function() {
					return {}
				},
				created: function() {},
				methods: {},
				mounted: function() {
					$(function() {
						$(".title_menu .link a").click(function() {
							var t = $(this).data("id");
							$(".title_menu .link a").removeClass("active"), $(this).addClass("active"), $(".app_download_guide_container").slideUp(300), $("#" + t).slideDown(300)
						})
					})
				},
				updated: function() {},
				beforeDestroy: function() {}
			}, mt = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticClass: "main_container"
					}, [s("div", {
						staticClass: "main_content layout_1200"
					}, [s("div", {
						staticClass: "content_block left"
					}, [s("div", {
						staticClass: "left_content_layout"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "app_download_container"
					}, [t._m(1), t._v(" "), s("div", {
						staticClass: "app_download_link_container"
					}, [s("div", {
						staticClass: "app_download_link_content"
					}, [s("div", {
						staticClass: "title"
					}, [t._v("请先删除旧版APP再重新安装")]), t._v(" "), s("div", {
						staticClass: "desc"
					}, [t._v("iOS 用户请使用 Safari 浏览器开启页面下载")]), t._v(" "), s("div", {
						staticClass: "qrcode_container"
					}, [s("div", [s("img", {
						attrs: {
							src: t.$store.state.appInfo.ios_download_qrcode,
							onerror: "this.src = '/static/image/appurl.jpg'"
						}
					})]), t._v(" "), s("div", [s("div", {
						staticClass: "download_text"
					}, [t._v("扫码下载APP")]), t._v(" "), s("div", {
						staticClass: "download_link"
					}, [s("a", {
						attrs: {
							href: t.$store.state.appInfo.ios_download_url,
							target: "_blank"
						}
					}, [t._v(t._s(t.$store.state.appInfo.ios_download_url))])])])]), t._v(" "), s("div", {
						staticClass: "qrcode_container"
					}, [s("div", [s("div", {
						staticClass: "download_text"
					}, [t._v("无需下载直接访问")]), t._v(" "), s("div", {
						staticClass: "download_link"
					}, [s("a", {
						attrs: {
							href: t.$store.state.appInfo.h5_url,
							target: "_blank"
						}
					}, [t._v(t._s(t.$store.state.appInfo.h5_url))])])])])])])])])]), t._v(" "), t._m(2)])])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "logo"
						}, [a("img", {
							attrs: {
								src: "/static/image/logo.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "phone_pic_container"
						}, [a("img", {
							staticClass: "phone_2",
							attrs: {
								src: "/static/image/iphone_app.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "content_block right"
						}, [s("div", {
							staticClass: "right_content_layout"
						}, [s("div", {
							staticClass: "title_menu"
						}, [s("div", {
							staticClass: "title"
						}, [t._v("安装教程")]), t._v(" "), s("div", {
							staticClass: "link"
						}, [s("a", {
							staticClass: "active",
							attrs: {
								"data-id": "ios"
							}
						}, [t._v("iOS")])]), t._v(" "), s("div", {
							staticClass: "link"
						}, [s("a", {
							attrs: {
								"data-id": "android"
							}
						}, [t._v("Android")])])]), t._v(" "), s("div", {
							staticClass: "app_download_notice"
						}, [t._v("须在同一网络环境下下载安装和注册，勿切换网络，"), s("br"), t._v("若无法正常下载，请使用手机浏览器开启。")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_container",
							attrs: {
								id: "ios"
							}
						}, [s("div", {
							staticClass: "app_download_guide"
						}, [t._v("1. 扫码后于页面中点选【立即下载】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("2. 点选【允许】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example1.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("3. 点选【关闭】后进入设定")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example2.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("4. 点选描述文件安装")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example3.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("5. 点选【安装】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example4.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("6. 【允许】网站配置描述文件")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example5.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("7. 点选【安装】即可成功安装、尽情游玩")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example6.png"
							}
						})])]), t._v(" "), s("div", {
							staticClass: "app_download_guide_container",
							staticStyle: {
								display: "none"
							},
							attrs: {
								id: "android"
							}
						}, [s("div", {
							staticClass: "app_download_guide"
						}, [t._v("1. 扫码后于页面中点选【立即下载】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/ios_alert_box_example.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("2【允许】浏览器访问您的设备")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/and_alert_box_example.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("3. 点选【下载】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/and_alert_box_example2.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("4. 当下载完成后选择档案")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/and_alert_box_example3.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("5. 点选【设置】")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/and_alert_box_example4.png"
							}
						})]), t._v(" "), s("div", {
							staticClass: "app_download_guide"
						}, [t._v("6. 允许您的设备安装应用程序")]), t._v(" "), s("div", {
							staticClass: "app_download_guide_img"
						}, [s("img", {
							attrs: {
								src: "/static/image/and_alert_box_example5.png"
							}
						})])])])])
					}
				]
			};
		var ut = s("VU/8")(pt, mt, !1, function(t) {
			s("ApO+")
		}, "data-v-6f7b67ec", null).exports,
			gt = {
				name: "payInfo",
				data: function() {
					return {
						payInfo: {},
						daoTime: null,
						m: 0,
						s: 0,
						type: null
					}
				},
				components: {},
				created: function() {
					var t = this.$route.query;
					t.deposit_no && this.getpayinfo(t.deposit_no)
				},
				mounted: function() {},
				methods: {
					doCopy: function(t) {
						var a = document.createElement("input");
						a.style.opacity = "0", a.value = t, document.body.appendChild(a), a.select(), document.execCommand("copy"), this.showTost("复制成功！")
					},
					getpayinfo: function(t) {
						var a = this;
						a.$apiFun.post("/api/payinfo", {
							deposit_no: t
						}).then(function(t) {
							console.log(t), 200 != t.code && a.showTost(t.message), 200 == t.code && (a.payInfo = t.data, a.type = t.message, a.countTime())
						})
					},
					countTime: function() {
						var t = (new Date).getTime(),
							a = this.payInfo.info.created_at,
							s = new Date(a).getTime() + 36e5 - t;
						if (s >= 0) {
							this.m = Math.floor(s / 1e3 / 60 % 60), this.s = Math.floor(s / 1e3 % 60);
							var e = this.m >= 10 ? this.m : "0" + this.m,
								i = this.s >= 10 ? this.s : "0" + this.s;
							$("._1ar3pTm_JYB-u2qWpt6e_z").html(e + ":" + i), setTimeout(this.countTime, 1e3)
						} else $("._1ar3pTm_JYB-u2qWpt6e_z").html("00:00")
					},
					showTost: function(t) {
						$("body").append("\n            <div class='ant-message' style='top: 400px;'><span><div class='ant-message-notice'><div class='ant-message-notice-content'>\n            <div class='ant-message-custom-content ant-message-info'><span role='img' aria-label='info-circle' class='anticon anticon-info-circle'>\n            <svg viewBox='64 64 896 896' focusable='false' data-icon='info-circle' width='1em' height='1em' fill='currentColor' aria-hidden='true'>\n            <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z'></path></svg></span><span>\n            " + t + "\n            </span></div></div></div></span>\n            </div>"), setTimeout('$(".ant-message").detach()', 2e3)
					}
				},
				beforeDestroy: function() {
					this.countTime && clearInterval(this.countTime), this.countTime = null
				}
			}, ht = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return t.payInfo.deposit_no ? s("div", {
						attrs: {
							id: "app-container"
						}
					}, [s("div", {
						staticClass: "n1sHi1_gDox2Q8ezpdZH5"
					}, [s("div", {
						staticClass: "_3nvVZbeP_KKFGRKZ3SxfW4"
					}, [s("div", {
						staticClass: "_2uM338LxSZnEUB6bCz4axi"
					}, [t._m(0), t._v(" "), s("div", {
						staticClass: "_3ATbZ84037ZhIQDiT-2nyD"
					}), t._v(" "), s("div", {
						staticClass: "_3CQ4hAT8Rn9-ZCUrRPjV7M"
					}, [s("div", {
						staticClass: "_9SJLkU9QpzPYzWOZY3Rqk"
					}, [s("span", [t._v("订单编号：")]), s("span", [t._v(t._s(t.payInfo.deposit_no))])]), t._v(" "), "usdtpay" == t.type ? s("div", {
						staticClass: "_9SJLkU9QpzPYzWOZY3Rqk"
					}, [s("span", [t._v("当前汇率：")]), s("span", {
						staticClass: "_3ZmEMAaXkrKqQ113p9F_uq"
					}, [t._v("1 " + t._s(t.payInfo.cardlist.content) + " = " + t._s(t.payInfo.info.usdtrate) + " CNY")])]) : t._e(), t._v(" "), "usdtpay" == t.type ? s("div", {
						staticClass: "_9SJLkU9QpzPYzWOZY3Rqk"
					}, [s("span", [t._v("充值数量：")]), s("span", {
						staticClass: "_3ZmEMAaXkrKqQ113p9F_uq"
					}, [t._v(t._s(t.payInfo.info.real_money) + " " + t._s(t.payInfo.cardlist.content))])]) : t._e(), t._v(" "), s("div", {
						staticClass: "_9SJLkU9QpzPYzWOZY3Rqk"
					}, [s("span", [t._v("充值金额：")]), s("span", {
						staticClass: "_3ZmEMAaXkrKqQ113p9F_uq"
					}, [t._v(t._s(t.payInfo.info.amount) + " CNY")])])])]), t._v(" "), s("div", {
						staticClass: "_2xx45NdpwT5KPaYgeMsdYE"
					}, [s("div", {
						staticClass: "_2q5dKVSXvbkX8syq1-Hl2W"
					}, [s("div", {
						staticClass: "_3VdBrxwboIJ2v_ON4OCRjS"
					}, [t._v(t._s(t.payInfo.info.paytype))]), t._v(" "), s("div", {
						staticClass: "_3785zJoWCXtLIHtAS_cA1C"
					}, [s("span", [t._v(t._s(t.payInfo.info.real_money) + " " + t._s("usdtpay" == t.type ? t.payInfo.cardlist.content : ""))])]), t._v(" "), s("div", {
						staticClass: "_1QI9TzXm1Ybnj9BJm4UQ7V"
					}, [t._v("请注意：您的实际到账金额要与此金额完全一致，否则无法及时到账")]), t._v(" "), s("div", {
						staticClass: "_21R49Y-pIno9CckiAjl0Id"
					}, [s("div", {
						staticClass: "_1f6333Dfetv7YoltY9pL-t"
					}, [t._v(t._s(t.payInfo.cardlist.content))]), t._v(" "), s("div", {
						staticClass: "_2_w4FbHMpnRRSdxBYtSL0e"
					}, [s("img", {
						staticStyle: {
							height: "210px",
							width: "210px"
						},
						attrs: {
							src: t.payInfo.cardlist.payimg,
							alt: ""
						}
					})])]), t._v(" "), "usdtpay" == t.type ? s("div", {
						staticClass: "_3sbSiVFgNQ2SK94qDJaI90"
					}, [s("span", {
						staticClass: "_2Vrrgjd_XLAifnNQgYu0NQ"
					}, [t._v(t._s(t.payInfo.cardlist.mch_id))]), t._v(" "), s("div", {
						staticClass: "f9bxdbnqcRudnKSP3y-bt",
						staticStyle: {
							cursor: "pointer"
						},
						on: {
							click: function(a) {
								return t.doCopy(t.payInfo.cardlist.mch_id)
							}
						}
					}, [t._v("复制")])]) : t._e()]), t._v(" "), s("div", {
						staticClass: "_2eg9lTattt1yp1qvWhgifb"
					}, [s("div", {
						staticClass: "_2-xkzXq0hmbuW9CZeDhVx_"
					}, [t._v("温馨提示")]), t._v(" "), "usdtpay" != t.type ? s("div", {
						staticClass: "HU1qShwkRp6KtCq22dC6O"
					}, [t._v("\n            1. 请勿向上述地址充值任何非"), s("span", {
						staticClass: "M8ZjTEuW7Q3mUpU0PbEeW"
					}, [t._v(t._s(t.payInfo.cardlist.content))]), t._v("资产，否则资产将会丢失；"), s("br"), t._v("2. 请务必确认电脑及浏览器安全，防止信息被篡改或泄密。\n            "), s("br")]) : t._e(), t._v(" "), "usdtpay" == t.type ? s("div", {
						staticClass: "HU1qShwkRp6KtCq22dC6O"
					}, [t._v("\n            1. 请勿向上述地址充值任何非"), s("span", {
						staticClass: "M8ZjTEuW7Q3mUpU0PbEeW"
					}, [t._v(t._s(t.payInfo.cardlist.content))]), t._v("资产，否则资产将会丢失；"), s("br"), t._v("2. 向上述地址充值后，需要网络节点区块确认，链上网络确认后到账； "), s("br"), t._v("3. 请务必确认电脑及浏览器安全，防止信息被篡改或泄密。 "), s("br"), t._v("4. " + t._s("usdtpay" == t.type ? t.payInfo.cardlist.content : "TRC20") + "协议：请使用"), s("span", {
						staticStyle: {
							color: "red"
						}
					}, [t._v("\n              " + t._s("usdtpay" == t.type ? "TRC20" == t.payInfo.info.bank ? "波场链" : "以太坊链" : "波场链") + "（" + t._s("usdtpay" == t.type ? t.payInfo.info.bank : "TRC20") + "协议） ")]), t._v("进行交易 ，其他智能链充值造成的不到账，金额损失自己承担。\n          ")]) : t._e(), t._v(" "), s("div", {
						staticStyle: {
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							height: "30px",
							"margin-top": "25px"
						}
					}, [s("el-button", {
						attrs: {
							type: "success"
						},
						on: {
							click: function(a) {
								return t.$router.push({
									path: "/profile"
								})
							}
						}
					}, [t._v("已完成付款")])], 1)])])])])]) : t._e()
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", [a("div", {
							staticClass: "_2HCazjAzieT4L96opZihj9"
						}, [this._v("剩余支付时间：")]), this._v(" "), a("div", {
							staticClass: "_1ar3pTm_JYB-u2qWpt6e_z"
						})])
					}
				]
			};
		var ft = s("VU/8")(gt, ht, !1, function(t) {
			s("9fDm")
		}, "data-v-73dae4c6", null).exports,
			Ct = {
				name: "userredpacket",
				data: function() {
					return {
						show: !1,
						redpacketList: [],
						page: 1,
						redpacketShowData: {},
						userredpacket: {
							rules: []
						},
						weikaishi: !1,
						end: !1,
						mey: 0,
						zhongjiang: !1,
						henbaoqian: !1,
						message: ""
					}
				},
				created: function() {
					this.getuserredpacket()
				},
				methods: {
					closeAll: function() {
						this.show = !1, this.weikaishi = !1, this.end = !1, this.zhongjiang = !1, this.henbaoqian = !1, this.message = ""
					},
					changShow: function() {
						if (this.userredpacket.sendnums <= 0) return this.henbaoqian = !0, void(this.message = "您暂未达到领取条件，快去完成吧！");
						this.getwelfare()
					},
					getwelfare: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.post("/api/douserredpacket", {}).then(function(a) {
							console.log(a), 200 == a.code ? (t.mey = a.data.redpacketmoney, t.getuserredpacket(), t.zhongjiang = !0) : (t.henbaoqian = !0, t.message = a.message), t.$parent.hideLoading()
						}).
						catch (function() {
							t.$parent.showTost(0, "服务器异常，请稍后再试"), t.$parent.hideLoading()
						})
					},
					getuserredpacket: function() {
						var t = this;
						t.$parent.showLoading(), t.$apiFun.get("/api/userredpacket", {}).then(function(a) {
							console.log(a), 200 != a.code && t.$parent.showTost(0, a.message), 200 == a.code && (t.userredpacket = a.data), t.$parent.hideLoading()
						})
					}
				},
				mounted: function() {},
				updated: function() {},
				beforeDestroy: function() {}
			}, bt = {
				render: function() {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", {
						staticStyle: {
							background: "url(/static/image/bg123456.jpg) top center no-repeat !important"
						}
					}, [s("input", {
						attrs: {
							type: "hidden",
							id: "startDate",
							value: "2022-06-18"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "endDate",
							value: "2022-06-18"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "startTime",
							value: "14:00:00"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "endTime",
							value: "15:59:59"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "currentDateTime",
							value: "2022-06-18 16:13:44"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "redPacketStatus",
							value: "END"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "activityTimeId",
							value: ""
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "memberType",
							value: "0"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "amount1",
							value: "0"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "amount2",
							value: "00"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "isLocal",
							value: "0"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "isWindow",
							value: "0"
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "windowHeight",
							value: ""
						}
					}), t._v(" "), s("input", {
						attrs: {
							type: "hidden",
							id: "windowWidth",
							value: ""
						}
					}), t._v(" "), s("div", {
						staticClass: "redEnveBody"
					}, [s("div", {
						staticClass: "redEnveBodyToo"
					}, [s("div", {
						staticClass: "redEnveBodyMain center"
					}, [t._m(0), t._v(" "), t._m(1), t._v(" "), s("div", {
						staticClass: "toddyTotal"
					}), t._v(" "), t._e(), t._v(" "), s("div", {
						staticClass: "receiveTimes",
						staticStyle: {
							"margin-top": "30px"
						}
					}, [s("p", {
						staticStyle: {
							"text-align": "center"
						}
					}, [t._v("\n             剩余领取次数 "), s("span", {
						staticClass: "yellow",
						staticStyle: {
							"font-size": "32px"
						},
						attrs: {
							id: "remainNum"
						}
					}, [t._v(t._s(t.userredpacket.sendnums < 0 ? 0 : t.userredpacket.sendnums))]), t._v(" 次，已领取 "), s("span", {
						staticClass: "yellow",
						staticStyle: {
							"font-size": "32px"
						},
						attrs: {
							id: "currentNum"
						}
					}, [t._v(t._s(t.userredpacket.acquirednum))]), t._v(" 次\n           ")])]), t._v(" "), s("div", {
						staticClass: "currReceiveTimes"
					}, [s("p", {
						staticStyle: {
							"text-align": "center"
						}
					}, [t._v("当前最多可领取 "), s("span", {
						staticClass: "yellow3",
						staticStyle: {
							"font-size": "29px"
						}
					}, [t._v(t._s(t.userredpacket.max_times))]), t._v(" 次， "), s("span", {
						attrs: {
							id: "maxMsg"
						}
					}, [t._v(" 快去满足条件吧！ ")])])]), t._v(" "), s("div", {
						staticClass: "redEnveButtons",
						on: {
							click: t.changShow
						}
					}), t._v(" "), s("div", {
						staticClass: "activityInfo",
						staticStyle: {
							"margin-top": "230px"
						}
					}, [s("div", {
						staticClass: "activityTop wow zoomIn",
						staticStyle: {
							visibility: "visible",
							"animation-name": "zoomIn",
							"line-height": "2"
						}
					}), t._v(" "), t.userredpacket.rules.length > 0 ? s("table", {
						attrs: {
							id: "activityTable"
						}
					}, [s("tbody", [t._m(4), t._v(" "), t._l(t.userredpacket.rules, function(a, e) {
						return s("tr", {
							key: e
						}, [s("td", [t._v(t._s(a.start_time) + " ~ " + t._s(a.end_time))]), t._v(" "), s("td", [t._v(t._s(a.day_flow) + "-" + t._s(a.flow_money))]), t._v(" "), s("td", [t._v(t._s(Math.floor(a.recharge)))])])
					})], 2)]) : t._e(), t._v(" "), t._m(5)]), t._v(" "), s("div", {
						staticClass: "h400"
					}), t._v(" "), s("div", {
						staticClass: "activityDes"
					}, [s("div", {
						staticClass: "activityDesTop wow zoomIn",
						staticStyle: {
							visibility: "visible",
							"animation-name": "zoomIn"
						}
					}), t._v(" "), s("div", {
						staticClass: "activityDesMain"
					}, [s("p", {
						staticStyle: {
							"text-align": "center"
						}
					}, [s("strong", [t._v(t._s(t.$store.state.appInfo.title))])]), t._v(" "), t._m(6), t._v(" "), s("p", [t._v("1、会员必须在指定的活动日期（美东时间）范围内，根据充值累计金额，即可获得对应抢红包次数。若在规定的时间范围内没有达到存款金额范围，则不计算抢红包次数，逾期作废！")]), t._v(" "), s("p", [t._v("2、所有的活动优惠特为玩家而设，如发现任何团体或个人，以不诚实的方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余的权利。")]), t._v(" "), s("p", [t._v("3、" + t._s(t.$store.state.appInfo.title) + "保留所有解释权，在任何时候都可以更改、停止、取消优惠活动。")]), t._v(" "), t._m(7)])])])]), t._v(" "), t._m(8), t._v(" "), t._m(9)]), t._v(" "), s("div", {
						staticClass: "rightFloat",
						staticStyle: {
							position: "fixed",
							"z-index": "1000",
							top: "365px",
							right: "0.25px",
							width: "183px"
						},
						attrs: {
							id: "box1",
							picfloat: "right"
						}
					}, [s("a", {
						staticClass: "myRedEnves",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile?type=5")
							}
						}
					}), t._v(" "), s("a", {
						staticClass: "myService",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: t.$parent.openKefu
						}
					})]), t._v(" "), t.weikaishi ? s("div", {
						staticClass: "weikaishi divIndex"
					}, [s("p", [t._v("活动还没开始，请静待活动开始。")]), t._v(" "), s("a", {
						staticClass: "close",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: t.closeAll
						}
					})]) : t._e(), t._v(" "), t.end ? s("div", {
						staticClass: "qiangwan divIndex"
					}, [s("p", [t._v("请静待下次活动。")]), t._v(" "), s("a", {
						staticClass: "close",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: t.closeAll
						}
					})]) : t._e(), t._v(" "), t.zhongjiang ? s("div", {
						staticClass: "zhongjiang divIndex"
					}, [s("p", [t._v("恭喜您")]), t._v(" "), s("p", [t._v("\n       抢到"), s("span", {
						staticClass: "yellow bigFont",
						attrs: {
							id: "redPacketAmount"
						}
					}, [t._v(t._s(t.mey))]), t._v("元\n     ")]), t._v(" "), s("a", {
						staticClass: "close",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: t.closeAll
						}
					})]) : t._e(), t._v(" "), t.henbaoqian ? s("div", {
						staticClass: "henbaoqian divIndex"
					}, [s("p", {
						attrs: {
							id: "henbaoqian"
						}
					}, [t._v(t._s(t.message))]), t._v(" "), s("div", {
						staticClass: "rules",
						attrs: {
							id: "viewRules"
						},
						on: {
							click: function(a) {
								return t.$parent.goNav("/profile")
							}
						}
					}, [t._v("立即充值")]), t._v(" "), s("a", {
						staticClass: "close",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: t.closeAll
						}
					})]) : t._e()])
				},
				staticRenderFns: [
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "redEnveBodyTop"
						}, [a("div", {
							staticClass: "pen"
						}, [a("img", {
							attrs: {
								src: "/static/image/pen.png"
							}
						})]), this._v(" "), a("div", {
							staticClass: "hongbao"
						}), this._v(" "), a("div", {
							staticClass: "jinbi"
						}), this._v(" "), a("div", {
							staticClass: "jinbi2"
						}), this._v(" "), a("div", {
							staticClass: "jinbi3"
						}), this._v(" "), a("div", {
							staticClass: "caidai"
						}), this._v(" "), a("div", {
							staticClass: "lcaidai"
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "redEnveFont"
						}, [a("img", {
							attrs: {
								alt: "",
								src: "/static/image/qianghb.png"
							}
						})])
					},
					function() {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s("div", {
							staticClass: "time"
						}, [s("span", {
							attrs: {
								id: "dd"
							}
						}, [t._v("00")]), t._v(": "), s("span", {
							attrs: {
								id: "hh"
							}
						}, [t._v("00")]), t._v(" "), s("div", {
							staticClass: "redEnveClock redEnveClock2"
						}, [s("div", {
							staticStyle: {
								display: "none"
							},
							attrs: {
								id: "ready"
							}
						}, [s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.35s",
								"animation-delay": "0.35s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.35s",
								"data-wow-delay": "0.35s"
							}
						}, [t._v("始")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.3s",
								"animation-delay": "0.3s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.30s",
								"data-wow-delay": "0.30s"
							}
						}, [t._v("开")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.25s",
								"animation-delay": "0.25s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.25s",
								"data-wow-delay": "0.25s"
							}
						}, [t._v("包")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.2s",
								"animation-delay": "0.2s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.20s",
								"data-wow-delay": "0.20s"
							}
						}, [t._v("红")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.15s",
								"animation-delay": "0.15s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.15s",
								"data-wow-delay": "0.15s"
							}
						}, [t._v("离")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.1s",
								"animation-delay": "0.1s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.10s",
								"data-wow-delay": "0.10s"
							}
						}, [t._v("距")])]), t._v(" "), s("div", {
							staticStyle: {
								display: "none"
							},
							attrs: {
								id: "starting"
							}
						}, [s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.35s",
								"animation-delay": "0.35s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.35s",
								"data-wow-delay": "0.35s"
							}
						}, [t._v("束")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.3s",
								"animation-delay": "0.3s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.30s",
								"data-wow-delay": "0.30s"
							}
						}, [t._v("结")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.25s",
								"animation-delay": "0.25s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.25s",
								"data-wow-delay": "0.25s"
							}
						}, [t._v("包")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.2s",
								"animation-delay": "0.2s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.20s",
								"data-wow-delay": "0.20s"
							}
						}, [t._v("红")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.15s",
								"animation-delay": "0.15s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.15s",
								"data-wow-delay": "0.15s"
							}
						}, [t._v("离")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.1s",
								"animation-delay": "0.1s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.10s",
								"data-wow-delay": "0.10s"
							}
						}, [t._v("距")])]), t._v(" "), s("div", {
							staticStyle: {
								display: "none"
							},
							attrs: {
								id: "red-packet-finish"
							}
						}, [s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.3s",
								"animation-delay": "0.3s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.30s",
								"data-wow-delay": "0.30s"
							}
						}, [t._v("完")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.25s",
								"animation-delay": "0.25s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.25s",
								"data-wow-delay": "0.25s"
							}
						}, [t._v("抢")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.2s",
								"animation-delay": "0.2s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.20s",
								"data-wow-delay": "0.20s"
							}
						}, [t._v("已")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.15s",
								"animation-delay": "0.15s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.15s",
								"data-wow-delay": "0.15s"
							}
						}, [t._v("包")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft animated",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.1s",
								"animation-delay": "0.1s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.10s",
								"data-wow-delay": "0.10s"
							}
						}, [t._v("红")])]), t._v(" "), s("div", {
							staticStyle: {
								display: "block"
							},
							attrs: {
								id: "finish"
							}
						}, [s("div", {
							staticClass: "wow zoomInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.3s",
								"animation-delay": "0.3s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.30s",
								"data-wow-delay": "0.30s"
							}
						}, [t._v("束")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.25s",
								"animation-delay": "0.25s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.25s",
								"data-wow-delay": "0.25s"
							}
						}, [t._v("结")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.2s",
								"animation-delay": "0.2s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.20s",
								"data-wow-delay": "0.20s"
							}
						}, [t._v("已")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.15s",
								"animation-delay": "0.15s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.15s",
								"data-wow-delay": "0.15s"
							}
						}, [t._v("包")]), t._v(" "), s("div", {
							staticClass: "wow zoomInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-duration": "0.1s",
								"animation-delay": "0.1s",
								"animation-name": "zoomInLeft"
							},
							attrs: {
								"data-wow-duration": "0.10s",
								"data-wow-delay": "0.10s"
							}
						}, [t._v("红")])])]), t._v(" "), s("span", {
							attrs: {
								id: "mm"
							}
						}, [t._v("00")]), t._v(": "), s("span", {
							attrs: {
								id: "ss"
							}
						}, [t._v("00")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "time2"
						}, [a("span", [this._v("天")]), this._v(" "), a("span", [this._v("时")]), this._v(" "), a("span", [this._v("分")]), this._v(" "), a("span", [this._v("秒")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("tr", [a("td", {
							staticStyle: {
								"border-radius": "17px 0px 0px"
							}
						}, [this._v("活动时间")]), this._v(" "), a("td", [this._v("累计充值金额")]), this._v(" "), a("td", {
							staticStyle: {
								"border-radius": "0px 17px 0px 0px"
							}
						}, [this._v("红包次数")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "activityBot wow flipInX",
							staticStyle: {
								visibility: "visible",
								"animation-name": "flipInX"
							}
						}, [a("h3", {
							staticClass: "yellow"
						}, [this._v("领取规则：")]), this._v(" "), a("p", [this._v("1.抢到红包后，系统自动派彩，"), a("span", {
							staticClass: "yellow"
						}, [this._v("秒到账")]), this._v("，达到流水倍数即可取款；")]), this._v(" "), a("p", [this._v("2.领取红包条件：充值金额需要在规定的活动日期（美东时间）范围内，根据充值累计金额，获取抢红包次数，即可抢对应次数的红包；")])])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("p", [a("strong", [this._v("注意："), a("strong", {
							staticStyle: {
								"white-space": "normal"
							}
						}, [this._v("抢红包")]), this._v("北京时间为每天早上 10点到12点，存款计算为前一天12点到今天10点，谢谢~")]), a("br"), this._v("每日百万现金红包！存款越多，机会越多，红包享不停，惊喜抢不停，还等什么？快快叫上好友一起分享吧！！"), a("br")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("p", [a("br")])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "botLeft wow bounceInLeft",
							staticStyle: {
								visibility: "visible",
								"animation-name": "bounceInLeft"
							}
						}, [a("img", {
							attrs: {
								src: "/static/image/botLeft.png"
							}
						})])
					},
					function() {
						var t = this.$createElement,
							a = this._self._c || t;
						return a("div", {
							staticClass: "botright"
						}, [a("img", {
							staticClass: "wow bounceInRight",
							staticStyle: {
								visibility: "visible",
								"animation-name": "bounceInRight"
							},
							attrs: {
								src: "/static/image/botRight.png"
							}
						})])
					}
				]
			};
		var wt = s("VU/8")(Ct, bt, !1, function(t) {
			s("iD1m")
		}, "data-v-7eb07764", null).exports;
		e.
		default.use(l.a);
		var yt = new l.a({
			mode: "hash",
			routes: [{
				path: "/",
				name: "navIndex",
				component: L
			}, {
				path: "/Main",
				name: "Main",
				component: u,
				children: [{
					path: "/homes",
					name: "index",
					component: w,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/sports",
					name: "sports",
					component: T,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/eSports",
					name: "eSports",
					component: P,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/realPerson",
					name: "realPerson",
					component: N,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/lottery",
					name: "lottery",
					component: F,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/cards",
					name: "cards",
					component: B,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/electronics",
					name: "electronics",
					component: j,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/about",
					name: "about",
					component: G,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/discount",
					name: "discount",
					component: W,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/discountInfo",
					name: "discountInfo",
					component: K
				}, {
					path: "/vip",
					name: "vip",
					component: J,
					meta: {
						keepAlive: !0,
						useCatch: !1
					}
				}, {
					path: "/mine",
					name: "mine",
					component: et,
					children: [{
						path: "/message",
						name: "message",
						component: vt
					}, {
						path: "/profile",
						name: "profile",
						component: ot
					}, {
						path: "/bankCard",
						name: "bankCard",
						component: lt
					}]
				}]
			}, {
				path: "/app",
				name: "app",
				component: ut
			}, {
				path: "/register",
				name: "register",
				component: k
			}, {
				path: "/payInfo",
				name: "payInfo",
				component: ft
			}, {
				path: "/gamePage",
				name: "gamePage",
				component: f
			}, {
				path: "/userredpackets",
				name: "userredpackets",
				component: wt
			}, {
				path: "*",
				redirect: "/"
			}]
		}),
			$t = s("//Fk"),
			kt = s.n($t),
			xt = s("mtWM"),
			It = s.n(xt),
			Lt = "http://admin.ng-room.com";
		sessionStorage.setItem("baseURL", Lt);
		var St = {
			baseURL: Lt,
			timeout: 6e4
		}, Tt = It.a.create(St);
		Tt.interceptors.request.use(function(t) {
			var a = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "";
			return t.headers.Authorization = "Bearer " + a, t
		}, function(t) {
			return kt.a.reject(t)
		}), Tt.interceptors.response.use(function(t) {
			return t.data.code, t
		}, function(t) {
			return kt.a.reject(t)
		});
		var Et = {
			get: function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return new kt.a(function(s, e) {
					Tt({
						url: t,
						params: a,
						headers: {
							"Content-Type": "application/json;charset=UTF-8"
						},
						method: "GET"
					}).then(function(t) {
						return s(t.data), t
					}).
					catch (function(t) {
						e(t)
					})
				})
			},
			post: function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return "/api/register" != t && "/api/login_pc" != t || sessionStorage.setItem("baseURL", Lt), new kt.a(function(s, e) {
					Tt({
						url: t,
						data: a,
						headers: {
							"Content-Type": "application/json;charset=UTF-8"
						},
						method: "POST"
					}).then(function(t) {
						return s(t.data), t
					}).
					catch (function(t) {
						e(t)
					})
				})
			}
		}, Pt = {
				get: function(t, a) {
					return Et.get(t, a)
				},
				post: function(t, a) {
					return Et.post(t, a)
				},
				login: function(t) {
					var a = sessionStorage.getItem("baseURL") || "";
					return a || sessionStorage.setItem("baseURL", a), Et.post("/api/login_pc", t)
				},
				register: function(t) {
					var a = sessionStorage.getItem("baseURL") || "";
					return a || sessionStorage.setItem("baseURL", a), Et.post("/api/register", t)
				}
			}, zt = Pt,
			Nt = s("NYxO");
		e.
		default.use(Nt.a);
		var At = JSON.parse(localStorage.getItem("userInfo")) || {}, Ft = sessionStorage.getItem("token") || "",
			Ut = JSON.parse(localStorage.getItem("appInfo")) || {}, Bt = Ft && localStorage.getItem("messageNum") || 0,
			qt = new Nt.a.Store({
				state: {
					userInfo: At,
					token: Ft,
					messageNum: Bt,
					appInfo: Ut
				},
				getters: {},
				mutations: {
					changUserInfo: function(t) {
						var a = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {};
						t.userInfo = a
					},
					changToken: function(t) {
						t.token = sessionStorage.getItem("token") || ""
					},
					changMessageNum: function(t) {
						var a = localStorage.getItem("show");
						t.messageNum = a ? 0 : localStorage.getItem("messageNum")
					},
					changappInfo: function(t) {
						var a = JSON.parse(localStorage.getItem("appInfo"));
						t.appInfo = a
					}
				},
				actions: {},
				modules: {}
			}),
			Dt = s("zL8q"),
			jt = s.n(Dt);
		s("tvR6");
		e.
		default.use(jt.a), e.
		default.prototype.$apiFun = zt, e.
		default.config.productionTip = !1, yt.afterEach(function(t, a, s) {
			window.scrollTo(0, 0)
		}), yt.beforeEach(function(t, a, s) {
			sessionStorage.getItem("token") && sessionStorage.getItem("token");
			t.matched.some(function(t) {
				return t.meta.requireAuth
			}) ? sessionStorage.getItem("token") ? s() : s({
				path: "/homes",
				query: {
					redirect: t.fullPath
				}
			}) : s()
		}), new e.
		default ({
			el: "#app",
			store: qt,
			router: yt,
			components: {
				App: c
			},
			template: "<App/>"
		})
	},
	OK4y: function(t, a) {},
	Pe34: function(t, a) {},
	SVU7: function(t, a) {},
	UPfc: function(t, a) {},
	aFBi: function(t, a) {},
	az1F: function(t, a) {},
	fvJY: function(t, a) {},
	iD1m: function(t, a) {},
	iybx: function(t, a) {},
	"l8b/": function(t, a) {},
	myVX: function(t, a) {},
	n7Ug: function(t, a) {},
	smfB: function(t, a) {},
	tvR6: function(t, a) {},
	zaCW: function(t, a) {}
}, ["NHnr"]);
//# sourceMappingURL=app.b74f7d0a2f152c53ab4f.js.map