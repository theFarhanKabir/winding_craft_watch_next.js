/** Replaceable event surface for a future analytics integration. This demo sends nothing. */
export type AnalyticsEvent =
  | "product_view" | "search" | "search_no_results" | "filter_used"
  | "add_to_cart" | "begin_checkout" | "payment_method_selected" | "demo_purchase_confirmation"
  | "compare_add" | "compare_remove" | "compare_limit_reached" | "compare_view"
  | "compare_differences_toggle" | "compare_add_to_cart" | "compare_message_click" | "compare_share"
  | "polish_addon_seen" | "polish_addon_selected" | "policy_page_view"
  | "after_sale_form_start" | "after_sale_form_submit" | "service_form_start" | "service_form_submit"
  | "message_us_click";

export type AnalyticsPayload = Readonly<Record<string, string | number | boolean>>;

// Keep personal information out of this interface. No analytics destination is configured.
export function trackEvent(_event: AnalyticsEvent, _payload?: AnalyticsPayload): void {
  // Intentionally a no-op until the owner selects an analytics provider.
  void _event;
  void _payload;
}
