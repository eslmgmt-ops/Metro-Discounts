import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard-shell"
import { SalesPromoList } from "@/components/sales-promo-list"

export const metadata: Metadata = {
  title: "Sales Promo · Metro Cannabis Discounts",
}

export default function SalesPromoPage() {
  return (
    <DashboardShell>
      <SalesPromoList />
    </DashboardShell>
  )
}
