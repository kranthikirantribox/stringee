// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Stringeeplugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "Stringeeplugin",
            targets: ["radiantxPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "radiantxPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/radiantxPlugin"),
        .testTarget(
            name: "radiantxPluginTests",
            dependencies: ["radiantxPlugin"],
            path: "ios/Tests/radiantxPluginTests")
    ]
)