# run: run-android run-ios

# run-android:
# 	cd scoopup && npm run android
run-ios:
	cd scoopup && npm run ios -- --simulator='iPhone 16 Pro'
