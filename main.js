//Comments By Ramzi
//The Varieble For The Score
var score = 0;
					//Adds Point And Activates Other Functions
					function addPoint() {
						showScore();
						score++;
						autoAdd();
						saveScore();
						}
						//Enables An Auto Point Add Every Three Seconds
						function autoAdd() {
							score += +3;
							setTimeout(autoAdd, 3000);
							saveScore();
							}
							//Displays Score and Auto Updates The Score
							function showScore() {
								document.getElementById("display_score").innerHTML = score;
								saveScore();
								setTimeout(showScore, 0001);
								}
								//Enables You To Buy The Mega Button
								function checkScoreOne() {
									if(score >= 1000) {
										score += -1000;
										var show = "mega-button show";
										document.getElementById("click_button").style.display = "none";
										document.getElementById("mega-button").style.display = "block";
										document.getElementById("mega-tap").style.display = "none";
										alert("Item Bought! Manuel Tap Now Equals 3!");
										}
										else {
											alert("Not Enough Points!");
											}
											}
											//The Mega Button Does More Points
											function megaPoint() {
												score += +3;
												}
												//Increases The Auto Add Value
												function checkScoreTwo() {
													if(score >= 1500) {
														score += -1500;
														document.getElementById("auto-increase-one").style.display = "none";
														alert("Auto Value Increased To Six!");
														}
														else {
															alert("Not Enough Points!");
														}
														}
														//Increased Auto Add Value
														function addAuto() {
															score += +3;
							setTimeout(autoAdd, 3000);
																	}
																	//The Super Ultra Button
																	function checkScoreThree() {
																		if(score >= 5000) {
																			score += -5000;
																			document.getElementById("ultra-text").style.display = "none";
																			document.getElementById("click_button").style.display = "none";
																			document.getElementById("mega-button").style.display = "none";
																			document.getElementById("ultra").style.display = "block";
																			alert("Bought! Manuel Tap Is Increased To 10!");
																			}
																			else {
																				alert("Not Enough");
																				}
																				}
																				//Ultra Point
																				function ultraClick() {
																					score += +10;
																					}
																					//Increases Auto Value
																					function checkScoreFour() {
																						if(score >= 6000) {
																						score += -6000;
																						document.getElementById("auto-2").style.display = "none";
																						alert("Auto Value Is Now 20!");
																						autoLevelTwo();
																						}
																						else {
																							alert("Not Enough Point(s)!");
																							}
																							}
																							//Increased Auto Value
																							function autoLevelTwo() {
																								score += +14;
																								setTimeout(autoLevelTwo, 3000);
																								}
																								//Get Bob
																								function checkScoreFive() {
																									if(score >= 7500) {
																										score += -7500;
																										freshHelp();
																										document.getElementById("help").style.display = "none";
																										document.getElementById("bob").style.display = "block";
																										alert("Got Help From Bob! He Will Randomly Come And Give You Points!");
																										}
																										else {
																											alert("Not Enough Points!");
																											}
																											}
																											//Help from Bob
																											function freshHelp() {
																												if(score >= 1000) {
																													score += +500;
																													alert("Bob Came And Gave You 500 Points!");
																													}
																													else {
																														score += +100;
																														alert("Bob Gave You 100 Points");
																														}
																														setTimeout(freshHelp, 60000);
																														}
																														//Checks For Points For Holy Button
																														function checkScoreSix() {
																															if(score >= 10000) {
																																score += -10000;
																																document.getElementById("holy").style.display = "none";
																																document.getElementById("click_button").style.display = "none";
																																document.getElementById("mega-button").style.display = "none";
																																document.getElementById("ultra").style.display = "none";
																																document.getElementById("holy-button").style.display = "block";
																																alert("Tap Now Increased To 50!!");
																																}
																																else {
																																	alert("Not Enough Points!");
																																	}
																																	}
																																	//Holy Click Point
																																	function holyClick() {
																																		score += +50;
																																		}
																																		//Go To "Other" Page
																																		function goTo() {
																																			window.location.href="other.html";
																																			}
																																			//Help From Haxer Level 1
																																			function checkScoreSeven() {
																																				if(score >= 2500) {
																																					score += -2500;
																																					alert("A Haxer Has Arrived!");
																																					document.getElementById("people_lvl_01").style.display="none";
																																					document.getElementById("people_lvl_02").style.display="block";
																																					randomPointOne();
																																					}
																																					else {
																																						alert("Not Enough Points!");
																																						}
																																						}
																																						function randomPointOne() {
																																							score += +1000;
																																							alert("A Haxer Came By And Gave You 1000 Points!");
																																							if(score < 2000) {
																																								setTimeout(randomPointOne, 10000);
																																								}
																																							if(score >= 2000) {
																																								setTimeout(randomPointOne, 25000);
																																								}
																																								if(score >= 4000) {
																																									setTimeout(randomPointOne, 45000);
																																									}
																																									if(score >= 6000) {
																																										setTimeout(randomPointOne, 50000);
																																										}
																																										if(score >= 8000) {
																																											setTimeout(randomPointOne, 60000);
																																											}
																																											if(score > 10000) {
																																												setTimeout(randomPointOne, 80000);
																																												}
																																												}
																																												//Help From Haxer Level 2
																																												function checkScoreEight() {
																																													if(score >= 5000) {
																																														score += -5000;
																																														alert("Even More Haxer Came");
																																														document.getElementById("people_lvl_02").style.display="none";
																																														document.getElementById("people_lvl_03").style.display="block";
																																														randomPointTwo();
																																														}
																																														}
																																														function randomPointTwo() {
																																															score += +2500;
																																															alert("Two Haxer Came And Gave 2500 Points!");
																																															if(score < 2000) {
																																																setTimeout(randomPointTwo, 10000);
																																																}
																																																if(score >= 2000) {
																																																	setTimeout(randomPointTwo, 25000);
																																																	}
																																																	if(score >= 4000) {
																																																		setTimeout(randomPointTwo, 45000);
																																																		}
																																																		if(score >= 6000) {
																																																			setTimeout(randomPointTwo, 50000);
																																																			}
																																																			if(score >= 8000) {
																																																				setTimeout(randomPointTwo, 60000);
																																																				}
																																																				if(score > 10000) {
																																																					setTimeout(randomPointTwo, 80000);
																																																					}
																																																					}
																																																					//Help From Haxer Level Three
																																																					function checkScoreNine() {
																																																						if(score >= 10000) {
																																																							score += -10000;
																																																							alert("Another Haxer Arrived");
																																																							document.getElementById("people_lvl_03").style.display = "none";
																																																							document.getElementById("people_lvl_04").style.display = "block";
																																																							randomPointThree();
																																																							}
																																																							else {
																																																								alert("Not Enough Points");
																																																							}
																																																							}
																																																							function randomPointThree() {
																																																								score += +3000;
																																																								alert("All Haxerz Gave 3000 Points");
																																																								if(score < 2000) {
																																																									setTimeout(randomPointThree, 10000);
																																																									}
																																																									if(score >= 2000) {
																																																										setTimeout(randomPointThree, 25000);
																																																										}
																																																										if(score >= 4000) {
																																																											setTimeout(randomPointThree, 45000);
																																																											}
																																																											if(score >= 6000) {
																																																												setTimeout(randomPointThree, 50000);
																																																												}
																																																												if(score >= 8000) {
																																																													setTimeout(randomPointThree, 60000);
																																																													}
																																																													if(score > 10000) {
																																																														setTimeout(randomPointThree, 80000);
																																																														}
																																																														}
																																																														//Help From Haxer Level 4
																																																														function checkScoreTen() {
																																																															if(score >= 15000) {
																																																																score += -15000;
																																																																alert("Way Lot O' Haxers Arrived!");
																																																																document.getElementById("people_lvl_04").style.display= "none";
																																																																document.getElementById("people_lvl_05").style.display="block";
																																																																randomPointFour();
																																																																}
																																																																}
																																																																function randomPointFour() {
																																																																	score += +4500;
																																																																	alert("All Haxers Gave 4500 Points!");
																																																																	if(score < 2000) {
																																																																		setTimeout(randomPointFour, 10000);
																																																																		}
																																																																		if(score >= 2000) {
																																																																			setTimeout(randomPointFour, 25000);
																																																																			}
																																																																			if(score >= 4000) {
																																																																				setTimeout(randomPointFour, 45000);
																																																																				}
																																																																				if(score >= 6000) {
																																																																					setTimeout(randomPointFour, 50000);
																																																																					}
																																																																					if(score >= 8000) {
																																																																						setTimeout(randomPointFour, 60000);
																																																																						}
																																																																						if(score > 10000) {
																																																																							setTimeout(randomPointFour, 80000);
																																																																							}
																																																																							}
																																																																							function checkScoreEleven() {
																																																																								if(score >= 20000) {
																																																																									score += -20000;
																																																																									alert("Maxed Haxers!");
																																																																									document.getElementById("people_lvl_05").style.display="none";
																																																																									document.getElementById("maxed").style.display="block";
																																																																									randomPointFive();
																																																																									}
																																																																									}
																																																																									function randomPointFive() {
																																																																										score += +6000;
																																																																										alert("EVERY SINGLE HAXER GAVE A TOTAL OF 6000 POINTS");
																																																																										if(score < 2000) {
																																																																											setTimeout(randomPointFive, 10000);
																																																																											}
																																																																											if(score >= 2000) {
																																																																												setTimeout(randomPointFive, 25000);
																																																																												}
																																																																												if(score >= 4000) {
																																																																													setTimeout(randomPointFive, 45000);
																																																																													}
																																																																													if(score >= 6000) {
																																																																														setTimeout(randomPointFive, 50000);
																																																																														}
																																																																														if(score >= 8000) {
																																																																															setTimeout(randomPointFive, 60000);
																																																																															}
																																																																															if(score > 10000) {
																																																																																setTimeout(randomPointFive, 80000);
																																																																																}
																																																																																}
																																																																																function saveScore() {
																																																																																	localStorage.storedList = document.getElementById("display_score").innerHTML;
																																																																																	}
																																																																																	function loadList() {
																																																																																		document.getElementById("display_score").innerHTML = localStorage.storedList;
																																																																																		var num = score;
																																																																																		score += +num;
																																																																																		}