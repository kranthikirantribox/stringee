import Foundation

@objc public class radiantx: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
