import { useFetcher } from 'react-router-dom';

import Button from '@/ui/Button';
import { updateOrder } from '@/services/apiRestaurant';

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isPriorityLoading = fetcher.state === 'loading';
  const isPrioritySubmitting = fetcher.state === 'submitting';

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button
        type="primary"
        disabled={isPriorityLoading || isPrioritySubmitting}
      >
        {isPriorityLoading || isPrioritySubmitting
          ? 'Changing Priority...'
          : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
