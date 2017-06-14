export function triggerCollapse() {
  return {
    type: 'TRIGGER_COLLAPSE',
  }
}
export function selectDateRange(data) {
  return {
    type: 'SELECT_DATE_RANGE',
    payload: data
  }
}
